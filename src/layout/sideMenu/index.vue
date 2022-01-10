<template>
  <div class="menu">
    <i
      @click="handleClick"
      class="handler"
      :class="isCollapse ? 'el-icon-s-fold' : 'el-icon-s-unfold'"
    ></i>
    <el-menu
      class="el-menu-vertical-demo"
      @open="handleOpen"
      @close="handleClose"
      :collapse="isCollapse"
    >
      <template>
        <div v-for="(item, index) in menuList" :key="index">
          <el-submenu :index="item.path" v-if="item.children && item.children.length > 1">
            <template>
              <template slot="title">
                <i class="el-icon-location"></i>
                <!-- <svg-icon icon-class="eye" /> -->
                <span slot="title">{{ item.name }}</span>
              </template>
              <template>
                <div v-for="(elm, index) in item.children" :key="index">
                  <template v-if="elm.children">
                    <el-submenu
                      v-for="dom in elm.children"
                      :key="dom.path"
                      :index="`${item.path}/${elm.path}`"
                    >
                      <span slot="title">{{ elm.name }}</span>
                      <el-menu-item
                        v-for="(el, index) in elm.children"
                        :key="index"
                        :index="`${item.path}/${elm.path}/${el.path}`"
                        @click="
                          handleSelect(`${item.path}/${elm.path}/${el.path}`, el.name)
                        "
                        >{{ el.name }}</el-menu-item
                      >
                    </el-submenu>
                  </template>

                  <el-menu-item
                    v-else
                    :index="`${item.path}/${elm.path}`"
                    @click="handleSelect(`${item.path}/${elm.path}`, elm.name)"
                    >{{ elm.name }}</el-menu-item
                  >
                </div>
              </template>
            </template>
          </el-submenu>
          <template v-else>
            <el-menu-item v-for="(elm, index) in item.children" :key="index" :index="elm.path" @click="handleSelect(`${elm.path}`, elm.name)">
              <i class="el-icon-menu"></i>
              <span slot="title">{{ elm.name }}</span>
            </el-menu-item>
          </template>
        </div>
      </template>
    </el-menu>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isCollapse: false,
      menuList: [],
    };
  },
  computed: {},
  mounted() {
    this.$store.dispatch("setDeptList").then((res) => {
      this.menuList = res;
    });
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClick() {
      this.isCollapse = !this.isCollapse;
    },
    // 点击菜单，生成Tag标签集合
    handleSelect(keyPath, key) {
      // 通过随机数生成动态路由
      // let num = Math.random()
      // this.$router.push({name: key, params: {id: num}})
      // 将地址，名称，随机数存入vuex，标签点击时可以跳转回去
      // this.$store.dispatch('setBarList', { keyPath, key, num})
      this.$router.push({ name: key });
      this.$store.dispatch("setBarList", { keyPath, key });
    },
  },
};
</script>

<style scoped lang="less">
.menu {
  height: 100%;
  .handler {
    font-size: 36px;
    float: right;
    position: relative;
    z-index: 11;
    cursor: pointer;
    margin-right: 5px;
  }
  & > .el-menu {
    height: calc(100% - 40px);
    padding-top: 40px;
  }
}
::v-deep .el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  min-height: 400px;
}
</style>
