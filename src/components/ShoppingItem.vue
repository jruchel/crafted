<template>
  <div>
    <v-slide-x-transition>
      <v-card :v-show="visible" hover width="100%" height="100%">
        <v-card-title>{{ item.name }}, {{ this.currency.sign }}{{ item.price }}
          <v-spacer></v-spacer>
          <v-btn color="#E53935" icon @click="deleteFromCart(item)">
            <v-icon large>mdi-minus-circle</v-icon>
          </v-btn>
        </v-card-title>
        <v-card-subtitle>{{ item.tagline }}</v-card-subtitle>
        <v-card-text>{{ item.description }}</v-card-text>
      </v-card>
    </v-slide-x-transition>
  </div>
</template>

<script>
import EventBus from "@/event-bus";

export default {
  name: "ShoppingItem",
  inject: ["currency"],
  props: ["item", "timeout"],
  mounted() {
    this.visible = true
  },
  data() {
    return {
      visible: false
    }
  },
  methods: {
    deleteFromCart(item) {
      this.visible = false
      EventBus.$emit('remove-from-cart', item)
    }
  }
}
</script>

<style scoped>

</style>