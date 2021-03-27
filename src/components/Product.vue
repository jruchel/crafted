<template>
  <v-sheet min-height="250" class="fill-height" color="transparent">
  <v-lazy  transition="fade-transition" :v-model="visible" height="100%" width="100%"  :options="{
          threshold: .5
        }">
  <v-card hover width="100%" height="100%" class="card-outter">
    <v-card-title>
      {{ product.name }} - {{ product.tagline }}
    </v-card-title>
    <v-divider></v-divider>
    <v-card-text>
      {{ product.description }}
      <br><br>
      Pairs well with: <br>
      <div id="food-pairing" v-for="food in this.product.food_pairing">
        <span>-{{ food }}</span>
      </div>
    </v-card-text>
    <v-spacer></v-spacer>
    <v-card-actions class="card-actions">
      <v-btn class="styled-button" v-if="typeof greenButton !== 'undefined'" depressed color="#81C784"
             style="color: white"
             @click="greenButtonClicked">{{
          greenButton.text
        }}
      </v-btn>
      <span style="margin-left: 5%">Price: ${{ product.price }}</span>
      <v-btn class="styled-button" v-if="typeof redButton !== 'undefined'" depressed color="#e53935"
             style="color: white"
             @click="redButtonClicked">{{
          redButton.text
        }}
      </v-btn>

      <v-btn class="styled-button" v-if="typeof blueButton !== 'undefined'" depressed color="#0288d1"
             style="color: white"
             @click="blueButtonClicked">{{
          blueButton.text
        }}
      </v-btn>
    </v-card-actions>
  </v-card>
  </v-lazy>
  </v-sheet>
</template>

<script>
import EventBus from "@/event-bus";

export default {
  name: "NewProduct",
  inject: ["currency"],
  props: ['product', "greenButton", "redButton", "blueButton"],
  data() {
    return {
      visible: false
    }
  },
  methods: {
    blueButtonClicked() {
      EventBus.$emit(this.blueButton.event, this.product)
    },
    greenButtonClicked() {
      console.log(this.product)
      EventBus.$emit(this.greenButton.event, this.product)
    },
    redButtonClicked() {
      EventBus.$emit(this.redButton.event, this.product)
    }
  }
}
</script>

<style scoped>

#food-pairing span {
  margin-left: 1%
}

.beer-image {
  width: 5%;
  height: 5%
}

.card-outter {
  position: relative;
  padding-bottom: 50px;
}

.card-actions {
  position: absolute;
  bottom: 0;
}

.styled-button {
  margin-left: 5px;
}

</style>