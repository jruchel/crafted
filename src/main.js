import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify';

window.axios = require('axios');
Vue.config.productionTip = false

let provided = {
    currency: {
        code: "USD",
        sign: "$",
        name: "Dollars"
    },
    appAddress: "https://api.punkapi.com/v2",
    router: router
}

new Vue({
    provide: provided,
    router,
    store,
    vuetify,
    render: h => h(App)
}).$mount('#app')
