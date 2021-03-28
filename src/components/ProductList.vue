<template>
  <v-container class="wide-container">
    <v-row align="center">
      <v-col cols="12" sm="12" md="6" lg="4" v-for="product in this.products" :key="product.name">
        <ProductDialog :product="product" :blue-button="blueButton" :red-button="redButton"
                       :green-button="greenButton"></ProductDialog>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>

import Product from "@/components/Product";
import ShoppingItem from "@/components/ShoppingItem";
import ProductDialog from "@/components/ProductDialog";

export default {
  name: "NewProductList",
  components: {ProductDialog, ShoppingItem, Product},
  inject: ["currency"],
  props: ["products", "greenButton", "redButton", "blueButton"],
}
</script>

<style scoped>

.wide-container {
  width: 100%;
  height: 100%;
}

</style>