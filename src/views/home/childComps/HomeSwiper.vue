<template>
  <swiper>
    <swiper-item v-for="(item, id) in banners" :key="id">
      <img :src="item.image" alt="" @load="imageload" />
    </swiper-item>
  </swiper>
</template>

<script>
import { Swiper, SwiperItem } from "components/common/swiper";
export default {
  name: "HomeSwiper",
  components: {
    Swiper,
    SwiperItem,
  },
  props: {
    banners: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  data() {
    return {
      isLoad: false,
    };
  },
  methods: {
    imageload() {
      if (!this.isLoad) {
        this.$emit("swiperImageLoad");
        this.isLoad = true; //只要有一张加载就可以了，一张就可以撑开轮播图的高度
      }
    },
  },
};
</script>

<style scoped></style>
