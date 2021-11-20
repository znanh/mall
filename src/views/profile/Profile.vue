<template>
  <div id="profile">
    <nav-bar class="nav-bar">
      <template v-slot:center> 个人中心 </template>
    </nav-bar>
    <user-info class="touch-none"></user-info>
    <account :account="account" class="account touch-none"></account>
    <list-view :list-data="orderList" class="order-list touch-none"></list-view>
    <list-view
      :list-data="serviceList"
      class="service-list touch-none"
    ></list-view>
  </div>
</template>

<script>
import UserInfo from "./childComps/UserInfo";
import ListView from "./childComps/ListView";
import Account from "./childComps/Account";

import NavBar from "components/common/navBar/NavBar";

export default {
  name: "Profile",
  components: {
    UserInfo,
    Account,
    ListView,
    NavBar,
  },
  data() {
    return {
      orderList: [
        { icon: "#order", iconColor: "#ff8198", info: "我的消息" },
        { icon: "#point", iconColor: "#fc7b53", info: "积分商城" },
        { icon: "#vip", iconColor: "#ffc636", info: "会员卡" },
      ],
      serviceList: [
        { icon: "#service", iconColor: "#ff8198", info: "我的购物车" },
        { icon: "#download", iconColor: "#ff8198", info: "下载购物APP" },
      ],
      account: [
        { balance: 0.0, unit: "元", info: "我的余额" },
        { balance: 0, unit: "个", info: "我的优惠" },
        { balance: 0, unit: "分", info: "我的积分" },
      ],
    };
  },
};
</script>

<style scoped>
#profile {
  background-color: #f2f2f2;
}

.nav-bar {
  background-color: var(--color-tint);
  font-weight: 700;
  color: #fff;
}

.account {
  display: flex;
}

.order-list,
.service-list {
  margin-top: 12px;
}
</style>