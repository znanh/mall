import { ADD_COUNTER, ADD_TO_CART, CHANGE_CHECKED, INIT } from "./mutation-type"

export default {
  addCart({ state, commit }, payload) {
    return new Promise((resolve, reject) => {
      let oldProduct = state.cartList.find(item => item.iid === payload.iid)
      if (oldProduct) {
        commit(ADD_COUNTER, oldProduct)
        resolve('当前商品数量+1')
      } else {
        payload.count = 1
        payload.checked = true
        commit(ADD_TO_CART, payload)
        resolve('添加了新的商品')
      }
    })
  },
  changeChecked({ state, commit }, payload) {
    commit(CHANGE_CHECKED, payload)
  },
  init({state,commit}){
    let cartList = JSON.parse(sessionStorage.getItem("cartList"))
    commit(INIT, cartList)
  }
}