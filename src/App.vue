<template>
  <div id="app">
    <keep-alive exclude="Detail">
      <router-view></router-view>
    </keep-alive>
    <keep-alive>
      <main-tab-bar
        v-if="$route.meta.footShow"
        class="touch-none"
      ></main-tab-bar>
    </keep-alive>
    <icon></icon>
    <svg-icon></svg-icon>
  </div>
</template>
<script>
import MainTabBar from "components/content/mainTabBar/MainTabBar";
import Icon from "components/content/Icon/Icon";
import SvgIcon from "components/content/Icon/svg";

export default {
  name: "App",
  components: {
    MainTabBar,
    Icon,
    SvgIcon,
  },
  mounted(){
    sessionStorage.getItem("cartList") ? this.$store.dispatch('init') : ''
    window.addEventListener("beforeunload",()=>{
        sessionStorage.setItem('cartList',JSON.stringify(this.$store.state.cartList))
    })
  }
};
</script>
<style>
@import "assets/css/base.css";
.touch-none {
  touch-action: none;
}
</style>
