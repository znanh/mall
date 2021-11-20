## 安装依赖包
```
npm install
```

### 开发环境编译
```
npm run serve
```

### 生产环境编译
```
npm run build
```

### 项目布局

```
.
├─ public				//静态资源
│    ├─ index.html		//html编译模板
│    └─ logo.png		//图标
├─ src					//源码目录
│    ├─ App.vue			//页面入口文件
│    ├─ assets			//资源目录
│    │    ├─ css		//样式资源
│    │    │    ├─ base.css			//基础样式
│    │    │    └─ normalize.css		//初始化样式
│    │    └─ img		//图片资源
│    │           ├─ cart			//购物车图片资源
│    │           ├─ common			//公共图片资源
│    │           ├─ detail			//详情图片资源
│    │           ├─ home			//主页图片资源
│    │           ├─ profile			//个人中心图片资源
│    │           └─ tabbar			//公共底部图片资源
│    ├─ common			//公共类
│    │    ├─ const.js	//常量
│    │    ├─ mixin.js	//混合
│    │    └─ utils.js	//工具
│    ├─ components		//组件
│    │    ├─ common		//公共组件
│    │    │    ├─ gridView				//栅格组件
│    │    │    │    └─ GridView.vue
│    │    │    ├─ navBar				//头部组件
│    │    │    │    └─ NavBar.vue
│    │    │    ├─ scroll				//滚动组件
│    │    │    │    └─ Scroll.vue
│    │    │    ├─ swiper				//轮播图组件
│    │    │    │    ├─ Swiper.vue
│    │    │    │    ├─ SwiperItem.vue
│    │    │    │    └─ index.js
│    │    │    ├─ tabBar				//底部组件
│    │    │    │    ├─ TabBar.vue
│    │    │    │    └─ TabBarItem.vue
│    │    │    └─ toast					//toast组件
│    │    │           ├─ Toast.vue
│    │    │           └─ index.js
│    │    └─ content	//业务组件
│    │           ├─ Icon				//icon组件
│    │           │    ├─ Icon.vue
│    │           │    └─ svg.vue
│    │           ├─ backTop				//回到顶部组件
│    │           │    └─ BackTop.vue
│    │           ├─ goods				//商品列表组件
│    │           │    ├─ GoodsList.vue
│    │           │    └─ GoodsListItem.vue
│    │           ├─ mainTabBar			//公共底部组件
│    │           │    └─ MainTabBar.vue
│    │           └─ tabControl			//标签控制组件
│    │                  └─ TabControl.vue
│    ├─ main.js			// 程序入口文件，加载各种公共组件
│    ├─ network			//网络
│    │    ├─ category.js				//分类请求
│    │    ├─ detail.js					//详情请求
│    │    ├─ home.js					//主页请求
│    │    └─ request.js					//axios封装
│    ├─ router			//路由	
│    │    └─ index.js					//路由配置
│    ├─ store			//vuex的状态管理
│    │    ├─ actions.js					//配置action
│    │    ├─ getters.js					//配置getters
│    │    ├─ index.js					//引用vuex，创建store
│    │    ├─ mutation-type.js			//定义常量mutation名
│    │    └─ mutations.js				//配置mutation
│    └─ views			//视图级组件
│           ├─ cart				//购物车
│           │    ├─ Cart.vue			//购物车组件
│           │    └─ childComps			//购物车子组件
│           │           ├─ CartBottomBar.vue		//购物车底部组件
│           │           ├─ CartList.vue				//购物车列表组件
│           │           ├─ CartListItem.vue			//购物车商品组件
│           │           └─ CheckButton.vue			//购物车选中按钮组件
│           ├─ category			//分类
│           │    ├─ Category.vue		//分类组件
│           │    └─ chidComps			//分类子组件
│           │           ├─ TabContentCategory.vue	//分类内容组件
│           │           └─ TabMenu.vue				//分类菜单组件
│           ├─ detail			//详情
│           │    ├─ Detail.vue			//详情组件
│           │    └─ childComps			//详情子组件
│           │           ├─ DetailBaseInfo.vue		//详情商品基础信息组件
│           │           ├─ DetailBottomBar.vue		//详情底部组件
│           │           ├─ DetailCommentInfo.vue	//详情评论组件
│           │           ├─ DetailGoodsInfo.vue		//详情商品信息组件
│           │           ├─ DetailNavBar.vue			//详情头部组件
│           │           ├─ DetailParamInfo.vue		//详情参数组件
│           │           ├─ DetailShopInfo.vue		//详情店铺信息组件
│           │           └─ DetailSwiper.vue			//详情轮播图组件
│           ├─ home				//主页
│           │    ├─ Home.vue			//主页组件
│           │    └─ childComps			//主页子组件
│           │           ├─ FeatureView.vue			//主页流行组件
│           │           ├─ HomeSwiper.vue			//主页轮播组件
│           │           └─ RecommendView.vue		//主页推荐组件
│           └─ profile			//个人中心
│                  ├─ Profile.vue		//个人中心组件
│                  └─ childComps		//个人中心子组件
│                         ├─ Account.vue			//个人中心账户组件
│                         ├─ ListView.vue			//个人中心功能列表组件
│                         └─ UserInfo.vue			//个人中心用户组件
├─ postcss.config.js			//配置postcss-px-to-viewport
└─ vue.config.js				//配置路径别名
```
