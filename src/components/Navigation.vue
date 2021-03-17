<template>
  <div>
    <v-app-bar dense color="#1d4647" dark>
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

export default {
  name: "App",
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
</style>