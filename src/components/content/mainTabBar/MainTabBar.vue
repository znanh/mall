<template>
  <tab-bar>
    <tab-bar-item v-for="item in tabbarData" :key="item.id" :path="item.path">
      <template v-slot:item-icon>
        <img :src="item.img" alt="" />
      </template>
      <template v-slot:item-icon-active>
        <img :src="item.imgActive" alt="" />
      </template>
      <template v-slot:item-text>
        {{ item.text }}
      </template>
    </tab-bar-item>
  </tab-bar>
</template>

<script>
import TabBar from "components/common/tabBar/TabBar";
import TabBarItem from "components/common/tabBar/TabBarItem";
export default {
  name: "MainTabBar",
  components: {
    TabBar,
    TabBarItem,
  },
  data() {
    return {
      tabbarData: [
        {
          id: 0,
          text: "首页",
          path: "/home",
          // img:'~assets/img/tabbar/home.svg'
          img: require("assets/img/tabbar/home.svg"), //图片路径作为变量用require,且不用~
          imgActive: require("assets/img/tabbar/home_active.svg"),
        },
        {
          id: 1,
          text: "分类",
          path: "/category",
          // img:'~assets/img/tabbar/category.svg'
          img: require("assets/img/tabbar/category.svg"),
          imgActive: require("assets/img/tabbar/category_active.svg"),
        },
        {
          id: 2,
          text: "购物车",
          path: "/cart",
          // img:'~assets/img/tabbar/shopcart.svg'
          img: require("assets/img/tabbar/shopcart.svg"),
          imgActive: require("assets/img/tabbar/shopcart_active.svg"),
        },
        {
          id: 3,
          text: "个人中心",
          path: "/profile",
          // img:'~assets/img/tabbar/profile.svg'
          img: require("assets/img/tabbar/profile.svg"),
          imgActive: require("assets/img/tabbar/profile_active.svg"),
        },
      ],
    };
  },
};
</script>

<style scoped>
</style>