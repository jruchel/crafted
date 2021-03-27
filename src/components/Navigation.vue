<template>
  <div>
    <v-app-bar color="#6D4C41" dense dark fixed style="text-align: center">
      <v-toolbar-title style="width: 100%; height: 100%; text-align: center"><h1>Crafted.</h1></v-toolbar-title>
      <v-spacer></v-spacer>
      <CartDialog class="top-of-nav"/>
      <template slot="extension">
        <v-tabs>
          <v-tab @click="loadPage('/')">
            <span>Home</span>
          </v-tab>
          <v-tab @click="loadPage('/products')">
            <span>Beers</span>
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
  margin-top: 15px;
  text-align: center;

}

</style>