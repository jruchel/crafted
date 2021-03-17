import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify';

Vue.config.productionTip = false

let provided = {
  products: [
    {name: "Peppers", description: "Just peppers", price: 2.99},
    {name: "Milk", description: "White water", price: 2.99},
    {name: "Water", description: "Transparent milk", price: 2.99},
  ],
  currency: {
    code: "USD",
    sign: "$",
    name: "Dollars"
  },
  router: router
}

new Vue({
  provide: provided,
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')

export default router