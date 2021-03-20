<template>
  <v-badge color="green" :content="this.shoppingItems.length">
    <v-icon color="green darken-2">
      mdi-cart
    </v-icon>
  </v-badge>
</template>

<script>

export default {
  name: "ShoppingCart",
  inject: ["shoppingItems"]
}
</script>

<style scoped>

</style>