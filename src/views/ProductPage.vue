<template>
  <div>
    <div>
    </div>
    <ProductList
                 :red-button="redButton"
                 :blue-button="blueButton"
                 :green-button="greenButton"
                 :products="this.products">
    </ProductList>
  </div>
</template>

<script>
import ProductList from "@/components/ProductList";
import EventBus from "@/event-bus";

export default {
  name: "NewProductPage",
  components: {ProductList},
  props: ["greenButton", "redButton", "blueButton"],
  mounted() {
    this.getProducts()
  },
  data() {
    return {
      alertVisible: false,
      products: []
    }
  },
  methods: {
    processResponse(response) {
      this.products = response
      for (let i = 0; i < this.products.length; i++) {
        this.products[i].price = (Math.floor((Math.random() + 0.2) * 1000) / 100)
      }
    },
    getProducts() {
      this.emit("send-http-request", "/beers?page=1&per_page=80", this.processResponse)
    },
    emit(event, ...args) {
      EventBus.$emit(event, args)
    }
  }
}
</script>

<style scoped>

</style>