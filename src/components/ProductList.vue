<template>
  <v-expansion-panels>
    <v-expansion-panel v-for="product in this.products" :key="product.name">
      <v-expansion-panel-header>
        {{ product.name }}, {{ currency.sign }}{{ product.price }}
      </v-expansion-panel-header>
      <v-expansion-panel-content>
        {{ product.description }}
      </v-expansion-panel-content>
      <v-expansion-panel-content>
        <v-btn depressed color="#4BCA81" style="color: white" @click="$emit('added-to-basket')">Add to basket</v-btn>
      </v-expansion-panel-content>
    </v-expansion-panel>
  </v-expansion-panels>
</template>

<script>
export default {
  name: "ProductList",
  inject: ["currency"],
  props: ["products"]
}
</script>

<style scoped>

</style>