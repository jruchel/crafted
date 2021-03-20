<template>
  <div>
    <NewProductList
        v-if="this.shoppingItems.length > 0"
        :products="this.shoppingItems"
        :red-button="redButton">
    </NewProductList>
    <h1 v-if="this.shoppingItems.length < 1">Your cart is empty.</h1>
  </div>
</template>

<script>
import NewProductList from "@/components/ProductList";

export default {
  name: "CartPage",
  components: {NewProductList},
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