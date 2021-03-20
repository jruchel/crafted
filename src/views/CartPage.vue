<template>
  <NewProductList
      :products="this.shoppingItems"
      :red-button="redButton"
  >
  </NewProductList>
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