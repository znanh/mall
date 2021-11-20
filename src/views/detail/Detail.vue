<template>
  <div id="detail">
    <detail-nav-bar
      class="detail-nav-bar"
      @titleClick="titleClick"
      ref="nav"
    ></detail-nav-bar>
    <scroll
      class="content"
      ref="scroll"
      @scroll="contentScroll"
      :probe-type="3"
    >
      <detail-swiper :top-images="topImages"></detail-swiper>
      <detail-base-info :goods="goods"></detail-base-info>
      <detail-shop-info :shop="shop"></detail-shop-info>
      <detail-goods-info
        :detail-info="detailInfo"
        @imageLoad="iamgeLoad"
      ></detail-goods-info>
      <detail-param-info
        :param-info="paramInfo"
        ref="params"
      ></detail-param-info>
      <detail-comment-info
        :comment-info="commentInfo"
        ref="comment"
      ></detail-comment-info>
      <goods-list :goods="recommends" ref="recommend"></goods-list>
    </scroll>
    <detail-bottom-bar
      class="touch-none"
      @addToCart="addToCart"
    ></detail-bottom-bar>
    <back-top @click.native="backClick" v-show="isShowBackTop"></back-top>
  </div>
</template>

<script>
import DetailNavBar from "./childComps/DetailNavBar";
import DetailSwiper from "./childComps/DetailSwiper";
import DetailBaseInfo from "./childComps/DetailBaseInfo";
import DetailShopInfo from "./childComps/DetailShopInfo";
import DetailGoodsInfo from "./childComps/DetailGoodsInfo";
import DetailParamInfo from "./childComps/DetailParamInfo";
import DetailCommentInfo from "./childComps/DetailCommentInfo";
import DetailBottomBar from "./childComps/DetailBottomBar";

import Scroll from "components/common/scroll/Scroll";
import GoodsList from "components/content/goods/GoodsList";

import {
  getDetailData,
  getRecommend,
  Goods,
  Shop,
  GoodsParam,
  Product,
} from "network/detail";

import { debounce } from "common/utils";
import {
  itemListenerMixin,
  backTopMixin,
  beforeRouteLeaveMixin,
} from "common/mixin";

import { mapActions } from "vuex";

export default {
  name: "Detail",
  components: {
    DetailNavBar,
    DetailSwiper,
    DetailBaseInfo,
    DetailShopInfo,
    DetailGoodsInfo,
    DetailParamInfo,
    DetailCommentInfo,
    DetailBottomBar,
    Scroll,
    GoodsList,
  },
  data() {
    return {
      iid: null,
      topImages: [],
      goods: {}, //子组件有判断goods是否为空所以不能传null值
      shop: {},
      detailInfo: {},
      paramInfo: {},
      commentInfo: {},
      recommends: [],
      themeTopYs: [],
      getThemeTopY: null,
      currentIndex: 0,
    };
  },
  mixins: [itemListenerMixin, backTopMixin, beforeRouteLeaveMixin],
  created() {
    this.getDetailData();
    this.getRecommend();
    this.getThemeTopY = debounce(() => {
      this.themeTopYs.push(0);
      this.themeTopYs.push(this.$refs.params.$el.offsetTop);
      this.themeTopYs.push(this.$refs.comment.$el.offsetTop);
      this.themeTopYs.push(this.$refs.recommend.$el.offsetTop);
      this.themeTopYs.push(Number.MAX_VALUE);
    });
  },
  destroyed() {
    this.$bus.$off("itemImageLoad", this.itemImgListener);
  },
  methods: {
    ...mapActions({
      addCart: "addCart",
    }),
    iamgeLoad() {
      this.$refs.scroll.refresh();
      this.getThemeTopY();
    },
    titleClick(index) {
      this.$refs.scroll.scrollTo(0, -this.themeTopYs[index]);
    },
    contentScroll(position) {
      const positionY = -position.y;
      for (let i = 0; i < this.themeTopYs.length - 1; i++) {
        if (
          this.currentIndex !== i &&
          positionY >= this.themeTopYs[i] &&
          positionY < this.themeTopYs[i + 1]
        ) {
          this.currentIndex = i;
          this.$refs.nav.currentIndex = this.currentIndex;
        }
      }
      this.listenShowBackTop(position);
    },
    addToCart() {
      // const product = {}
      // product.iid = this.iid
      // product.image = this.topImages[0]
      // product.title = this.goods.title
      // product.desc = this.goods.desc
      // product.price = this.goods.realPrice
      let product = new Product(
        this.iid,
        this.topImages[0],
        this.goods.title,
        this.goods.desc,
        this.goods.realPrice
      );
      // this.$store.dispatch("addCart", product);
      this.addCart(product).then((res) => {
        this.$toast.show(res);
      });
    },

    getDetailData() {
      this.iid = this.$route.query.iid;
      getDetailData(this.iid).then((res) => {
        const data = res.result;
        this.topImages = data.itemInfo.topImages;
        this.goods = new Goods(
          data.itemInfo,
          data.columns,
          data.shopInfo.services
        );
        this.shop = new Shop(data.shopInfo);
        this.detailInfo = data.detailInfo;
        this.paramInfo = new GoodsParam(
          data.itemParams.info,
          data.itemParams.rule
        );
        if (data.rate.cRate !== 0) {
          this.commentInfo = data.rate.list[0];
        }
        // this.$nextTick(() => {
        //   //根据最新的数据，DOM已经被渲染出来了，但是图片依然没有加载完，offsetTop值不对的时候，一般都是图片的原因}
        //   this.themeTopYs.push(0);
        //   this.themeTopYs.push(this.$refs.params.$el.offsetTop);
        //   this.themeTopYs.push(this.$refs.comment.$el.offsetTop);
        //   this.themeTopYs.push(this.$refs.recommend.$el.offsetTop);
        // });
        // data.rate.cRate !== 0 && (this.commentInfo = data.rate.list[0])
      });
    },
    getRecommend() {
      getRecommend().then((res) => {
        this.recommends = res.data.list;
      });
    },
  },
};
</script>

<style scoped>
#detail {
  height: 100vh;
  position: relative;
  z-index: 1;
  background-color: #fff;
}

.content {
  position: absolute;
  top: 44px;
  bottom: 60px;
}

.detail-nav-bar {
  position: relative;
  z-index: 9;
  background-color: #fff;
}

.back-top {
  position: fixed;
  right: 10px;
  bottom: 65px;
}
</style>
