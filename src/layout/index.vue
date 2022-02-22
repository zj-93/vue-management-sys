<template>
  <div class="app-main">
    <div class="app-menu">
      <SideMenu />
    </div>
    <section class="app-content">
      <transition name="fade-transform" mode="out-in">
        <keep-alive>
          <div class="routerView" id="routerView">
            <router-view :key="key" />
          </div>
        </keep-alive>
      </transition>
    </section>
  </div>
</template>

<script>
import SideMenu from "@/layout/sideMenu";

export default {
  name: "AppMain",
  components: {
    SideMenu,
  },
  data() {
    return {
      userInfo: {
        name: "123",
      },
    };
  },
  computed: {
    key() {
      return this.$route.path;
    },
  },
  methods: {
  },
};
</script>

<style scoped lang="less">
.app-main {
  width: 100%;
  height: 100%;
  .app-menu{
    width: 100%;
    height: 60px;
    border-bottom: 1px solid #f5f5f5;
    box-sizing: border-box;
    box-shadow: 0 1px 10px 1px #c8c8c8;
  }
  .app-content{
    height: calc(100% - 60px);
    width: 100%;
    overflow: hidden;
    box-sizing: border-box;
  }
  #routerView{
    height: 100%;
    overflow: hidden;
  }
}
</style>
