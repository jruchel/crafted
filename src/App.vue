<template>
  <div>
    <Navigation/>
    <router-view></router-view>
    <br><br>
    <v-slide-x-transition>
      <v-alert v-show="addAlertVisible" color="#66BB6A" type="success">
        <span style="color: white">Item added to basket.</span>
      </v-alert>
    </v-slide-x-transition>
    <div data-app></div>
  </div>
</template>

<script>
import Navigation from "@/components/Navigation";
import EventBus from "@/event-bus";
import axios from "axios";
import ShoppingItem from "@/components/ShoppingItem";

export default {
  name: 'App',
  mounted() {
    EventBus.$on('send-http-request', args => {
      this.sendRequest(args[0], args[1])
    })
    EventBus.$on('add-to-cart', args => {
      let item = {
        id: this.getAvailableCartId(),
        name: args.name,
        description: args.description,
        price: args.price,
        tagline: args.tagline
      }
      this.addItemToCart(item)
      this.showAddAlert()
    })
    EventBus.$on('remove-from-cart', args => {
      this.removeItemFromCart(args)
    })

  },
  components: {
    ShoppingItem,
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
    findItemIndexInCart(item) {
      for (let i = 0; i < this.shoppingItems.length; i++) {
        if (this.shoppingItems[i] === item) {
          return i
        }
      }
    },
    getCart() {
      return this.shoppingItems
    },
    getAvailableCartId() {
      for (let i = 0; i <= this.shoppingItems.length; i++) {
        if (!this.cartContainsItemWithId(i)) {
          return i
        }
      }
    },
    cartContainsItemWithId(id) {
      for (let i = 0; i < this.shoppingItems.length; i++) {
        if (this.shoppingItems[i].id === id) {
          return true
        }
      }
      return false
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

body {
  background-image: url(assets/logo_transparent.png);
  background-size: 50%;
  background-position: top center;
}

h1 {
  text-align: center;
}

@font-face {
  font-family: "VeganStyle";
  src: local("VeganStyle"),
  url(./assets/fonts/VeganStyle.ttf) format("truetype");
}

@font-face {
  font-family: "LemonJelly";
  src: local("LemonJelly"),
  url(./assets/fonts/LemonJelly.ttf) format("truetype");
}

.button {
  font-size: 15px;
}
</style>
