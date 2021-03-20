<template>
  <ProductList :products="this.shoppingItems">
  </ProductList>
</template>

<script>
import ProductList from "@/components/ProductList";

export default {
  name: "CartPage",
  components: {ProductList},
  inject: ["shoppingItems"]
}
</script>

<style scoped>

</style>