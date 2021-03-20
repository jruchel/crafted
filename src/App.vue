<template>
  <div>
    <Navigation/>
    <router-view></router-view>
    <v-slide-x-transition>
      <v-alert v-show="addAlertVisible" color="#4BCA81" type="success">
        <span style="color: white">Item added to basket.</span>
      </v-alert>
      <v-alert v-show="showRemoveAlert" color="#4BCA81" type="success">
        <span style="color: white">Item removed from basket.</span>
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
    EventBus.$on('add-to-cart', args => {
      let item = {name: args.name, description: args.description, price: args.price}
      this.addItemToCart(item)
      this.showAddAlert()
    })
    EventBus.$on('remove-from-cart', args => {
      this.removeItemFromCart(args)
      this.showRemoveAlert()
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
      removeAlertVisible: false,
      addAlertVisible: false,
      shoppingItems: []
    }
  },
  methods: {
    showAddAlert() {
      if (this.addAlertVisible === false) {
        this.addAlertVisible = true
        setTimeout(() => this.addAlertVisible = false, 1150)
      }
    },
    showRemoveAlert() {
      if (this.removeAlertVisible === false) {
        this.removeAlertVisible = true
        setTimeout(() => this.removeAlertVisible = false, 1150)
      }
    },
    findItemIndexInCart(item) {
      for (let i = 0; i < this.shoppingItems.length; i++) {
        if (this.shoppingItems[i] === item) {
          return i
        }
      }
    },
    addItemToCart(item) {
      this.shoppingItems.push(item)
    },
    removeItemFromCart(item) {
      this.shoppingItems.splice(this.findItemIndexInCart(item), 1)
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
