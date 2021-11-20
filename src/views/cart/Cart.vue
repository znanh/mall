<template>
  <div id="cart">
    <nav-bar class="nav-bar">
      <template v-slot:center> 购物车({{ cartLength }}) </template>
    </nav-bar>
    <cart-list class="cart-list"></cart-list>
    <cart-bottom-bar></cart-bottom-bar>
  </div>
</template>

<script>
import CartList from "./childComps/CartList";
import CartBottomBar from "./childComps/CartBottomBar";

import NavBar from "components/common/navBar/NavBar";

import { beforeRouteLeaveMixin } from "common/mixin";

import { mapGetters } from "vuex";

export default {
  name: "Cart",
  components: {
    CartList,
    CartBottomBar,
    NavBar,
  },
  computed: {
    ...mapGetters(["cartLength"]),
  },
  mixins: [beforeRouteLeaveMixin],
};
</script>

<style scoped>
#cart {
  /*position: relative;*/
  height: 100vh;
}

.nav-bar {
  position: relative;
  z-index: 10;
  background-color: var(--color-tint);
  font-weight: 700;
  color: #fff;
}

.cart-list {
  position: absolute;
  top: 44px;
  bottom: 89px;
  width: 100%;
}
</style>