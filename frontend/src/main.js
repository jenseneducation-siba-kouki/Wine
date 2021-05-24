import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import json from "./data/wines.json";


Vue.config.productionTip = false

new Vue({
  router,
  data:
  
  () => ({
    wines: json.wines
  }),

methods: {

},
  store,
  render: h => h(App)
}).$mount('#app')
