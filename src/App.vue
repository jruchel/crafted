<template>
  <div>
    <Navigation/>
    <router-view></router-view>
    <v-slide-x-transition>
      <v-alert v-show="alertVisible" color="#4BCA81" type="success">
        <span style="color: white">Item added to basket.</span>
      </v-alert>
    </v-slide-x-transition>
  </div>
</template>

<script>
import Navigation from "@/components/Navigation";
import EventBus from "@/event-bus";
import axios from "axios";

export default {
  name: 'App',
  mounted() {
    EventBus.$on('send-http-request', args => {
      this.sendRequest(args[0], args[1])
    })
    EventBus.$on('item-to-shopping-cart', args => {
      let item = {name: args.name, description: args.description, price: args.price}
      this.addItemToCart(item)
      this.showAlert()
    })
    EventBus.$on('item-from-shopping-cart', args => {
      this.removeItemFromCart(args[0])
    })

  },
  components: {
    Navigation,
  },
  provide() {
    return {
      shoppingItems: this.shoppingItems
    }
  },
  inject: ["appAddress"],
  data() {
    return {
      alertVisible: false,
      shoppingItems: []
    }
  },
  methods: {
    showAlert() {
      if (this.alertVisible === false) {
        this.alertVisible = true
        setTimeout(() => this.alertVisible = false, 1150)
      }
    },
    addItemToCart(item) {
      this.shoppingItems.push(item)
    },
    removeItemFromCart(item) {
      this.shoppingItems.splice(item)
    },
    sendRequest(endpoint, onComplete) {
      let address = this.appAddress + endpoint
      axios.get(address).then(value => onComplete(value.data))
    }
  }
};
</script>
<style>
.button {
  font-size: 15px;
}
</style>
