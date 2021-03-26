<template>

  <div class="text-center">
    <v-dialog
        v-model="dialog"
        width="500"
    >
      <template v-slot:activator="{ on, attrs }">
        <v-btn
            icon
            dark
            v-bind="attrs"
            v-on="on"
        >
          <v-badge
              color="#43A047"
              :content="getShoppingItemsLength()"
              :value="getShoppingItemsLength() > 0"
          >

            <v-icon
                color="green darken-2">
              mdi-cart
            </v-icon>
          </v-badge>
        </v-btn>

      </template>
      <v-card>
        <v-card-title>Your cart:
          <v-spacer></v-spacer>
          <span>Cart total: {{ this.currency.sign }}{{ getTotalCartPrice() }}</span>
        </v-card-title>
        <div id="empty-cart" v-if="getShoppingItemsLength() === 0">
          <v-card-text>
            <h1 style="text-align: center">Your cart is empty.</h1>
            <br>
          </v-card-text>
        </div>
        <div id="not-empty-cart" v-if="getShoppingItemsLength() > 0">
            <v-card-text v-for="item in getShoppingItems()" :key="item.id">
                    <ShoppingItem :item="item" :timeout="getTimeoutValue(item.id)"></ShoppingItem>
            </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="#43A047" dark>Checkout</v-btn>
          </v-card-actions>
        </div>

      </v-card>
    </v-dialog>
  </div>
</template>

<script>
import ShoppingItem from "@/components/ShoppingItem";

export default {
  name: "CartDialog",
  components: {ShoppingItem},
  inject: ["shoppingItems", "currency"],
  data() {
    return {
      dialog: false,
    }
  },
  methods: {
    getTimeoutValue(id) {
      if (id === 0) {
        return 100
      }
      return id * 200
    },
    getTotalCartPrice() {
      let sum = 0
      for (let i = 0; i < this.shoppingItems.length; i++) {
        sum += this.shoppingItems[i].price
      }
      return sum
    },
    getShoppingItems() {
      return this.shoppingItems
    },
    getShoppingItemsLength() {
      return this.shoppingItems.length
    }
  }
}
</script>

<style scoped>

</style>