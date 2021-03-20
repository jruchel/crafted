<template>
  <v-expansion-panels>
    <v-expansion-panel v-for="product in this.products" :key="product.name">
      <NewProduct
          :blue-button="blueButton"
          :red-button="redButton"
          :green-button="greenButton"
          :product="product"></NewProduct>
    </v-expansion-panel>
  </v-expansion-panels>
</template>

<script>

import Product from "@/components/Product";
import NewProduct from "@/components/Product";

export default {
  name: "NewProductList",
  components: {NewProduct, Product},
  inject: ["currency"],
  props: ["products", "greenButton", "redButton", "blueButton"],
}
</script>

<style scoped>

</style>