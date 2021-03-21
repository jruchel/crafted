<template>
  <div>
    <v-app-bar dense color="#00897B" dark>
      <v-app-bar-title class="top-of-nav">Jack's and Martin's</v-app-bar-title>
      <v-spacer></v-spacer>
      <CartDialog class="top-of-nav"/>

      <template v-slot:extension>
        <v-tabs>
          <v-tab @click="loadPage('/')">
            <span>Home</span>
          </v-tab>
          <v-tab @click="loadPage('/products')">
            <span>Products</span>
          </v-tab>
          <v-tab @click="loadPage('/contact')">
            <span>Contact</span>
          </v-tab>
        </v-tabs>
      </template>
    </v-app-bar>
  </div>
</template>
<script>

import ShoppingCart from "@/components/ShoppingCart";
import CartDialog from "@/components/CartDialog";

export default {
  name: "App",
  components: {CartDialog, ShoppingCart},
  inject: ["router"],
  methods: {
    loadPage(name) {
      this.router.push(name)
    }
  }
};
</script>

<style scoped>
a {
  text-decoration: none;
  color: whitesmoke;
}

.top-of-nav {
  margin-top: 10px;
}

</style>