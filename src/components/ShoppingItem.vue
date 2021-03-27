<template>
  <v-card v-show="visible">
    <v-card-title>{{ item.name }}, {{ this.currency.sign }}{{ item.price }}
      <v-spacer></v-spacer>
      <v-btn color="#E53935" icon @click="deleteFromCart(item)">
        <v-icon large>
          mdi-minus-circle
        </v-icon>
      </v-btn>
    </v-card-title>
    <v-card-subtitle>{{ item.tagline }}</v-card-subtitle>
    <v-card-text>{{ item.description }}</v-card-text>
    <v-spacer></v-spacer>
  </v-card>
</template>

<script>
import EventBus from "@/event-bus";

export default {
  name: "ShoppingItem",
  inject: ["currency"],
  props: ["item", "timeout"],
  mounted() {
    console.log(this.item)
  },
  data() {
    return {
      visible: true
    }
  },
  methods: {
    deleteFromCart(item) {
      EventBus.$emit('remove-from-cart', item)
    }
  }
}
</script>

<style scoped>

</style>