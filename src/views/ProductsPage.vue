<template>
<div>
  <v-expansion-panels>
    <v-expansion-panel v-for="product in this.products" :key="product.name">
      <v-expansion-panel-header>
        {{ product.name }}, {{currency.sign}}{{product.price}}
      </v-expansion-panel-header>
      <v-expansion-panel-content>
        {{ product.description }}
      </v-expansion-panel-content>
    </v-expansion-panel>
  </v-expansion-panels>
</div>
</template>

<script>
export default {
  name: "ProductsPage",
  inject: ["products", "currency"],
  mounted() {
    console.log(this.products)
  }
}
</script>

<style scoped>

</style>