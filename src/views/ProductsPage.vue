<template>
  <div>

    <ProductList :products="this.products" v-on:added-to-basket="showAlert()"></ProductList>
    <br><br>
    <v-slide-x-transition>
      <v-alert v-show="alertVisible" color="#4BCA81" type="success">
        <span style="color: white">Item added to basket.</span>
      </v-alert>
    </v-slide-x-transition>
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
    },
    showAlert() {
      console.log("Alert")
      this.alertVisible = true
      setTimeout(() => this.alertVisible = false, 1150)
    }
  }
}
</script>

<style scoped>

</style>