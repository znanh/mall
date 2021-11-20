<template>
  <div id="category">
    <nav-bar>
      <template v-slot:center> 商品分类 </template>
    </nav-bar>
    <div class="content">
      <tab-menu :categories="categories" @selectItem="selectItem"></tab-menu>
      <scroll
        class="tab-content"
        :probe-type="3"
        ref="scroll"
        @scroll="contentScroll"
      >
        <tab-content-category
          :subcategories="showSubcategory"
        ></tab-content-category>
        <tab-control :titles="title" @tabClick="tabClick"></tab-control>
        <goods-list :goods="showCategoryDetail"></goods-list>
      </scroll>
      <back-top @click.native="backClick" v-show="isShowBackTop"></back-top>
    </div>
  </div>
</template>

<script>
import TabMenu from "./chidComps/TabMenu";
import TabContentCategory from "./chidComps/TabContentCategory";

import NavBar from "components/common/navBar/NavBar";
import Scroll from "components/common/scroll/Scroll";
import TabControl from "components/content/tabControl/TabControl";
import GoodsList from "components/content/goods/GoodsList";

import {
  getCategory,
  getSubcategory,
  getCategoryDetail,
} from "network/category";

import {
  itemListenerMixin,
  backTopMixin,
  saveYandClearBus,
} from "common/mixin";

export default {
  name: "Category",
  components: {
    TabMenu,
    TabContentCategory,
    NavBar,
    Scroll,
    TabControl,
    GoodsList,
  },
  data() {
    return {
      categories: [],
      categoryData: [],
      currentIndex: -1,
      currentType: "pop",
      title: ["流行", "新款", "精选"],
    };
  },
  mixins: [itemListenerMixin, backTopMixin, saveYandClearBus],
  computed: {
    showSubcategory() {
      if (this.currentIndex === -1) return {};
      return this.categoryData[this.currentIndex].subcategories;
    },
    showCategoryDetail() {
      if (this.currentIndex === -1) return [];
      return this.categoryData[this.currentIndex].categoryDetail[
        this.currentType
      ];
    },
  },
  created() {
    this.getCategory();
  },
  methods: {
    contentScroll(position) {
      this.listenShowBackTop(position);
    },
    tabClick(index) {
      switch (index) {
        case 0:
          this.currentType = "pop";
          break;
        case 1:
          this.currentType = "new";
          break;
        case 2:
          this.currentType = "sell";
          break;
      }
    },
    selectItem(index) {
      this.backClick();
      this.getSubcategories(index);
    },
    getCategory() {
      getCategory().then((res) => {
        this.categories = res.data.category.list;
        const length = this.categories.length;
        for (let i = 0; i < length; i++) {
          /* this.$set(this.categoryData,i,{
              subcategories: {},
              categoryDetail: {
                'pop': [],
                'new': [],
                'sell': []
              }
            }) */
          this.categoryData[i] = {
            subcategories: {},
            categoryDetail: {
              pop: [],
              new: [],
              sell: [],
            },
          };
        }
        this.getSubcategories(0);
      });
    },
    getSubcategories(index) {
      this.currentIndex = index;
      const mailKey = this.categories[index].maitKey;
      getSubcategory(mailKey).then((res) => {
        this.categoryData[index].subcategories = res.data;
        // this.$set(this.categoryData[index],'subcategories',res.data)
        this.categoryData = [...this.categoryData];
        //要么重新赋值，改变categoryData的内存地址，要么在前面就响应式添加属性，不然页面不会更新
        this.getCategoryDetail("pop");
        this.getCategoryDetail("new");
        this.getCategoryDetail("sell");
      });
    },
    getCategoryDetail(type) {
      // 1.获取请求的miniWallkey
      const miniWallkey = this.categories[this.currentIndex].miniWallkey;
      // 2.发送请求,传入miniWallkey和type
      getCategoryDetail(miniWallkey, type).then((res) => {
        // 3.将获取的数据保存下来
        this.categoryData[this.currentIndex].categoryDetail[type] = res;
        this.categoryData = [...this.categoryData];
      });
    },
  },
};
</script>

<style scoped>
#category {
  height: 100vh;
}

.nav-bar {
  position: relative;
  z-index: 9;
  background-color: var(--color-tint);
  font-weight: 700;
  color: #fff;
}

.content {
  position: absolute;
  left: 0;
  right: 0;
  top: 44px;
  bottom: 49px;
  display: flex;
}

.tab-content {
  height: 100%;
  flex: 1;
}
</style>