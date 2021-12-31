<template>
  <div class="app-main">
    <header class="header">22222222222222222</header>
    <div class="app-bottom">
      <div class="app-menu">
        <SideMenu />
      </div>
      <section class="app-content">
        <xTabbar></xTabbar>
        <transition name="fade-transform" mode="out-in">
          <keep-alive>
            <div class="routerView">
                <router-view :key="key" />
            </div>
          </keep-alive>
        </transition>
        <div class="pageFooter">
              qwwwwwwwwwwwwww
            </div>
      </section>
      
    </div>
  </div>
</template>

<script>
import SideMenu from "@/layout/sideMenu";
import xTabbar from "./xTabbar/xTabbar";

export default {
  name: "AppMain",
  components: {
    SideMenu,
    xTabbar
  },
  computed: {
    key() {
      return this.$route.path;
    },
  },
};
</script>

<style scoped lang="less">
.app-main {
  width: 100%;
  height: 100%;
  .header{
    background-color: rgba(0,0,0,0.2);
    height: 60px;
    line-height: 60px;
  }
  .app-bottom {
    display: flex;
    height: calc(100% - 60px);
    .app-menu {
      height: 100%;
    }
    .app-content {
      flex: 1;
      padding: 0;
      box-sizing: border-box;
      .routerView{
        padding: 12px;
        padding-bottom: 0px;
        box-sizing: border-box;
        height: calc(100% - 50px);
        &>div{
          height: 100%;
        }
      }
      .pageFooter{
        font-size: 12px;
        text-align: center;
        line-height: 18px;
        color: #fff;
        background-color: rgba(0, 0, 0, 0.2);
      }
    }
  }
}
</style>
