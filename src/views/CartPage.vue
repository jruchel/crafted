<template>
  <div>
    <ProductList
        v-if="this.shoppingItems.length > 0"
        :products="this.shoppingItems"
        :red-button="redButton">
    </ProductList>
    <h1 v-if="this.shoppingItems.length < 1">Your cart is empty.</h1>
  </div>
</template>

<script>
import ProductList from "@/components/ProductList";

export default {
  name: "CartPage",
  components: {ProductList},
  inject: ["shoppingItems"],
  data() {
    return {
      redButton: {
        text: "Remove from cart",
        event: "remove-from-cart"
      }
    }
  }
}
</script>

<style scoped>

</style>