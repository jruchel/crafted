<template>
  <div>
    <v-expansion-panel-header>
      {{ product.name }}, {{ currency.sign }}{{ product.price }}
    </v-expansion-panel-header>
    <v-expansion-panel-content>
      {{ product.description }}
    </v-expansion-panel-content>
    <v-expansion-panel-content>
      <v-btn depressed color="#4BCA81" style="color: white" @click="addToCart">Add to
        cart
      </v-btn>
    </v-expansion-panel-content>
  </div>
</template>

<script>
import EventBus from "@/event-bus";

export default {
  name: "Product",
  inject: ["currency"],
  props: ['product'],
  methods: {
    addToCart() {
      EventBus.$emit("item-to-shopping-cart", this.product)
    }
  }
}
</script>

<style scoped>

</style>