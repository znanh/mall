<template>
  <swiper class="detail-swiper">
    <!-- <swiper class="detail-swiper" v-if="topImages.length"> -->
    <!-- v-if不知道有啥用 -->
    <!-- 图片不轮播去scroll里面mounted开启的定时器延长时间，100ms谁加载的完那么多图片 -->
    <swiper-item v-for="(item, index) in topImages" :key="index">
      <img :src="item" alt="" />
    </swiper-item>
  </swiper>
</template>

<script>
import { Swiper, SwiperItem } from "components/common/swiper";
export default {
  name: "DetailSwiper",
  components: {
    Swiper,
    SwiperItem,
  },
  props: {
    topImages: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  methods: {},
};
</script>

<style scoped>
.detail-swiper {
  height: 300px;
  overflow: hidden;
}
</style>