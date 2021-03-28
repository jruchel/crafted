<template>
  <div style="width: 100%; height: 100%">
    <Product :product="product" :green-button="greenButton" :blue-button="blueButton" :red-button="redButton"
             v-on:click="activate"></Product>
    <v-container>
      <v-row>
        <v-col sm="6" md="6" lg="4" cols="12">
          <v-dialog v-model="dialog">
            <v-card>
              <v-toolbar color="white" dark flat class="sticky-toolbar">
                <v-toolbar-title>{{ product.name }} - {{ product.tagline }}</v-toolbar-title>
                <v-spacer></v-spacer>
                <v-btn color="#43A047" dark>Add to cart</v-btn>
              </v-toolbar>
              <v-divider></v-divider>
              <v-card-text>
                <v-container>
                  <v-row>
                    <v-col>
                      {{ product.description }}
                      <br><br>
                      Pairs well with: <br>
                      <div id="food-pairing" v-for="food in this.product.food_pairing">
                        <span>-{{ food }}</span>
                      </div>
                    </v-col>
                    <v-divider vertical></v-divider>
                    <v-col>
                      <div class="styled-dialog">
                        <v-img max-width="200" :src="product.image_url"></v-img>
                      </div>
                    </v-col>
                  </v-row>
                </v-container>
              </v-card-text>
            </v-card>
          </v-dialog>
        </v-col>
      </v-row>

    </v-container>
  </div>
</template>

<script>
import Product from "@/components/Product";

export default {
  name: "ProductDialog",
  components: {Product},
  props: ["product", "greenButton", "redButton", "blueButton"],
  data() {
    return {
      dialog: false
    }
  },
  methods: {
    activate() {
      console.log("Activated")
      this.dialog = true
    }
  }
}
</script>

<style scoped>

#food-pairing span {
  margin-left: 1%
}

.styled-dialog {
  width: 100%;
  height: 100%;
}

.sticky-toolbar {
  position: sticky;
  top: 0;
  z-index: 999;
}

</style>