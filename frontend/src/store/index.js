import Vue from 'vue'
import Vuex from 'vuex'
import listWines from '../data/wines.json'

import axios from 'axios'
Vue.use(Vuex)

export default new Vuex.Store({

  state: {
    wines: [],
    counter: 0,
    cart: [],
    activeOrder: {},
    order: {},
    load: false,


  },

  mutations: {
    displayWines(state, wines) {
      state.wines = wines;
  },
  orderStatus(state, order) {
    state.activeOrder = order;
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
      let checkItem = context.state.cart.filter(check => check.id === item.id)

      if (checkItem.length > 0) {
          context.commit('updateItem', checkItem[0].id)
      } else {
          context.commit('add', item)
      }
  },
  async sendOrder(context) {
    console.log('wines')
    let order = {
        item: context.state.cart
    }
    try {
        context.state.load = true
        let resp = await axios.post(`${process.env.VUE_APP_API_URL}/order/`, order)
        console.log(resp)
        context.state.load = false
        context.commit('orderStatus', resp.data)
    } catch (err) {
        console.log(err)
        console.log('something went wrong')
    }
    context.state.cart =[]
    context.commit("emptyCart")
}
  },
  modules: {
  }
})
