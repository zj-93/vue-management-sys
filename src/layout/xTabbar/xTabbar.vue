<template>
  <div id="XTabbar" class="XTabbar-wrap" :class="{'no-tab':!menus.length}">
    <div class="tabbar-list">
      <div class="tabbar-item" :class="{active: activeFlag(item.keyPath)}" v-for="(item, index) in menus" :key="index" @click="clickMenu(item)">
        {{item.key}}
        <div class="close" @click.stop="closeMenu(item, index)">×</div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'XTabbar',
    data() {
      return {
        currentPath: ''
      }
    },
    created() {
      this.currentPath = this.$route.path
    },
    mounted() {},
    methods: {
      clickMenu(item) {
        // this.currentPath = item.keyPath;
        // this.$router.push(`${item.keyPath}`);
        this.$router.push({name: item.key, params: {id: item.num}})
      },
      closeMenu(item, index) {
        let nextPath = '';
        this.$store.dispatch('delBarList', index)
        if(this.menus.length > 0) {
          if(this.$route.path.indexOf(item.keyPath) < 0) {
            return
          }
          let idx  = index > 0 ? index - 1 : 0
          nextPath = this.menus[idx].keyPath
        } else {
          nextPath = '/example/home';
        }
        this.$router.push(nextPath);
      },
      strEnd(str,endStr){
        // 判断字符串是否以endStr结尾
        var d = str.length - endStr.length;
        return (d >= 0 && str.lastIndexOf(endStr) == d)
      },
      activeFlag(path){
        // currentPath.indexOf(item.path) > -1
        if(path === this.currentPath) {
          return true
        }else if(this.strEnd(this.currentPath,"Detail")){
          let s = this.currentPath.split("Detail")[0];
          return s === path         
        }else if(this.strEnd(this.currentPath,"Edit")){
          let s = this.currentPath.split("Edit")[0];
          return s === path 
        }else {
          return false
        }
      }
    },
    computed: {
      menus() {
        return this.$store.getters.barList
      }
    },
    components: {},
    watch: {
      $route(n) {
        this.currentPath = n.path
      }
    }
  }
</script>

<style scoped lang="less">
  // @import '../../assets/css/variable.less';
  .XTabbar-wrap{
    // margin-bottom: 20px;
    width: 100%;
    height: 32px;
    background-color: #fff;
    .tabbar-list{
      display: flex;
      border-bottom:1px solid rgba(229,229,229,1);
      .tabbar-item{
        padding: 0 10px 0 30px;
        line-height: 32px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        font-size: 15px;
        color: #838084;
        border-right: 1px solid #e5e5e5;
        // background-color: #e6e6e6;
        &:first-of-type{
          border-left: 1px solid #e5e5e5;
        }
        cursor: pointer;
        user-select: none;
        &.active{
          background-color: #fff;
          box-shadow: 2px 2px 5px #888888;
        }
        .close{
          margin-left: 10px;
          font-size: 20px;
          font-weight: lighter;
          &:hover{
            color: #ccc;
          }
        }
      }
    }
     &.no-tab{
      display: none;
      }
  }
</style>
