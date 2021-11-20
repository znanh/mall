import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "",
    redirect: "/home",
  },
  {
    path: "/home",
    meta: {
      title: "首页",
      footShow: true,
    },
    component: () => import("views/home/Home"),
  },
  {
    path: "/category",
    meta: {
      title: "分类",
      footShow: true,
    },
    component: () => import("views/category/Category"),
  },
  {
    path: "/cart",
    meta: {
      title: "购物车",
      footShow: true,
    },
    component: () => import("views/cart/Cart"),
  },
  {
    path: "/profile",
    meta: {
      title: "个人中心",
      footShow: true,
    },
    component: () => import("views/profile/Profile"),
  },
  {
    path: "/detail",
    meta: {
      title: "详情",
      footShow: false,
    },
    // name:'detail', //用了name才可以用命名路由跳转
    component: () => import("views/detail/Detail"),
  },
];
const router = new VueRouter({
  routes,
  mode: "history",
});

router.beforeEach((to, from, next) => {
  document.title = to.meta.title;
  next();
});

//解决当前路由重复点击跳转的问题，重写push方法
const VueRouterPush = VueRouter.prototype.push;
VueRouter.prototype.push = function push(location) {
  return VueRouterPush.call(this, location).catch((err) => err);
};

//重写replace方法
const VueRouterReplace = VueRouter.prototype.replace;
VueRouter.prototype.replace = function replace(location) {
  return VueRouterReplace.call(this, location).catch((err) => err);
};

export default router;
