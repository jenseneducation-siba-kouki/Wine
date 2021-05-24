import Vue from 'vue'
import Vuex from 'vuex'
import listWines from '../data/wines.json'


Vue.use(Vuex)

export default new Vuex.Store({

  state: {
    wines: [],
    counter: 0,
    cart: [],
    activeOrder: {},

  },

  mutations: {
    displayWines(state, wines) {
      state.wines = wines;
  },
  add(state, item) {
    state.cart.push({
        id: item.id,
        price: item.price,
        title: item.title,
        quantity: 1
    })
  },
  updateItem(state, id) {
    state.cart.find(item => item.id == id).quantity++;
},

removeItem(state, id) {
    state.cart.find(item => item.id == id);
},
emptyCart(state) {
  state.cart = [];
}
  },

  actions: {
    async getlistWines(context) {

      setTimeout(() => {
          context.commit('displayWines', listWines.wines)
      }, 600)
  },
  addToCart(context, item) {
      // context.commit("add", item)
      let checkItem = context.state.cart.filter(check => check.id === item.id)

      if (checkItem.length > 0) {
          context.commit('updateItem', checkItem[0].id)
      } else {
          context.commit('add', item)
      }
  },
  },
  modules: {
  }
})
