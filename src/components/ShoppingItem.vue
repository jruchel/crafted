<template>
    <v-card v-show="visible">
      <v-card-title>{{ item.name }}
        <v-spacer></v-spacer>
        <v-btn color="#E53935" icon @click="deleteFromCart(item)">
          <v-icon large>
            mdi-minus-circle
          </v-icon>
        </v-btn>
      </v-card-title>
      <v-card-subtitle>{{ this.currency.sign }}{{ item.price }}</v-card-subtitle>
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
    setTimeout(e => this.visible = true, this.timeout)
  },
  data() {
    return {
      visible: false
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