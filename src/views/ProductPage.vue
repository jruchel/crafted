<template>
  <div>
    <div>
    </div>
    <ProductList style="display: inline-block"
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