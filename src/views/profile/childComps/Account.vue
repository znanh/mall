<template>
  <div id="account">
    <div class="account-item" v-for="(item, index) in account" :key="index">
      <div class="number"><span class="balance">0.00</span>元</div>
      <div class="account-info">我的余额</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Account",
  props: {
    account: {
      type: Array,
      default() {
        return [];
      },
    },
  },
};
</script>

<style scoped>
.account-item {
  width: 100%;
  background-color: #fff;
  margin-right: 1px;
  text-align: center;
}

.account-item:last-of-type {
  margin-right: 0;
}

.account-item {
  color: #666;
  font-size: 13px;
  padding: 18px;
}

.account-item .balance {
  font-size: 24px;
  font-weight: 700;
  color: #ff5f3e;
}
.account-info {
  margin-top: 6px;
}
</style>