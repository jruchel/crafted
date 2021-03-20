<template>
  <v-expansion-panels>
    <v-expansion-panel v-for="product in this.products" :key="product.name">
      <Product :product="product"></Product>
    </v-expansion-panel>
  </v-expansion-panels>
</template>

<script>

import Product from "@/components/Product";

export default {
  name: "ProductList",
  components: {Product},
  inject: ["currency"],
  props: ["products"],
}
</script>

<style scoped>

</style>