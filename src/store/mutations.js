import { ADD_COUNTER, ADD_TO_CART, CHANGE_CHECKED, INIT } from "./mutation-type"

export default {
  // mutations唯一的目的就是修改state中状态
  // mutations中的每个方法尽可能完成的事件比较单一一点
  [ADD_COUNTER](state, payload) {
    payload.count++
    sessionStorage.setItem('cartList',JSON.stringify(state.cartList))
  },
  [ADD_TO_CART](state, payload) {
    state.cartList.push(payload)
    sessionStorage.setItem('cartList',JSON.stringify(state.cartList))
  },
  [CHANGE_CHECKED](state, payload) {
    payload.checked = !payload.checked
    sessionStorage.setItem('cartList',JSON.stringify(state.cartList))
  },
  [INIT](state, payload){
    state.cartList = payload
  }
}