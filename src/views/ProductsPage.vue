<template>
  <div>
    <ProductList :products="this.products" v-on:item-to-shopping-cart="showAlert()"></ProductList>
    <br><br>
  </div>
</template>

<script>
import ProductList from "@/components/ProductList";
import EventBus from "@/event-bus";

export default {
  name: "ProductsPage",
  components: {ProductList},
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
    },
    getProducts() {
      this.emit("send-http-request", "/products", this.processResponse)
    },
    emit(event, ...args) {
      EventBus.$emit(event, args)
    }
  }
}
</script>

<style scoped>

</style>