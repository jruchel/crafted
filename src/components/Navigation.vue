<template>
  <div>
    <v-app-bar dense color="#6D4C41" dark>
      <v-app-bar-title class="top-of-nav title">Jack's and Martin's</v-app-bar-title>

      <CartDialog class="top-of-nav"/>
      <template v-slot:extension>
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

}

.title {
  font-family: LemonJelly, serif;
  font-size: 200%;
  width: 100%;
}

</style>