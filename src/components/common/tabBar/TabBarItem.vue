<template>
  <div class="tab-bar-item" @click="itemClick">
    <div v-if="!isActived"><slot name="item-icon"></slot></div>
    <div v-else><slot name="item-icon-active"></slot></div>
    <div :style="activeStyle"><slot name="item-text"></slot></div>
  </div>
</template>

<script>
export default {
  name: "TabBarItem",
  props: {
    path: {
      type: String,
      default: "",
    },
    activeColor: {
      type: String,
      default: "red",
    },
  },
  computed: {
    isActived() {
      return !this.$route.path.indexOf(this.path);
    },
    activeStyle() {
      return this.isActived ? { color: this.activeColor } : {}; // 后面的value值为字符串
    },
  },
  methods: {
    itemClick() {
      this.$router.replace(this.path);
    },
  },
};
</script>

<style scoped>
.tab-bar-item {
  flex: 1;
  text-align: center;
  height: 49px;
  font-size: 14px;
}

.tab-bar-item img {
  width: 24px;
  height: 24px;
  margin-top: 3px;
  vertical-align: middle;
  margin-bottom: 2px;
}
</style>