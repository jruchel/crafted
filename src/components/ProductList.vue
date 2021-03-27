<template>
  <v-container class="wide-container">
    <v-row align="center">
      <v-col cols="12" sm="12" md="6" lg="4" v-for="product in this.products" :key="product.name">
          <NewProduct :product="product" :green-button="greenButton" :red-button="redButton" :blue-button="blueButton">
          </NewProduct>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>

import Product from "@/components/Product";
import NewProduct from "@/components/Product";
import ShoppingItem from "@/components/ShoppingItem";

export default {
  name: "NewProductList",
  components: {ShoppingItem, NewProduct, Product},
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