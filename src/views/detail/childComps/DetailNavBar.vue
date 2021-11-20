<template>
  <nav-bar class="detail-nav">
    <template v-slot:left>
      <img
        src="~assets/img/common/back.svg"
        alt=""
        class="back"
        @click="backClick"
      />
    </template>
    <template v-slot:center>
      <div class="title">
        <span
          class="title-item"
          v-for="(item, index) in titleInfos"
          :key="index"
          :class="{ active: index === currentIndex }"
          @click="navClick(index)"
          >{{ item }}</span
        >
      </div>
    </template>
  </nav-bar>
</template>

<script>
import NavBar from "components/common/navBar/NavBar.vue";

export default {
  name: "DetailNavBar",
  components: {
    NavBar,
  },
  props: {
    titleInfos: {
      type: Array,
      default() {
        return ["商品", "参数", "评论", "推荐"];
      },
    },
  },
  data() {
    return {
      currentIndex: 0,
    };
  },
  methods: {
    backClick() {
      this.$router.back();
    },
    navClick(index) {
      this.currentIndex = index;
      this.$emit("titleClick", index);
    },
  },
};
</script>

<style scoped>
.detail-nav {
  background-color: #fff;
  font-weight: normal;
}

.title {
  display: flex;
  padding: 0 20px;
  font-size: 14px;
}

.title-item {
  flex: 1;
}

.title-item.active {
  color: var(--color-high-text);
}

.back {
  margin-top: 12px;
}
</style>
