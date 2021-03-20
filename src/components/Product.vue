<template>
  <div>
    <v-expansion-panel-header>
      {{ product.name }}, {{ currency.sign }}{{ product.price }}
    </v-expansion-panel-header>
    <v-expansion-panel-content>
      {{ product.description }}
    </v-expansion-panel-content>
    <v-expansion-panel-content>
      <v-btn class="styled-button" v-if="typeof greenButton !== 'undefined'" depressed color="#4BCA81"
             style="color: white"
             @click="greenButtonClicked">{{
          greenButton.text
        }}
      </v-btn>
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
    </v-expansion-panel-content>
  </div>
</template>

<script>
import EventBus from "@/event-bus";

export default {
  name: "NewProduct",
  inject: ["currency"],
  props: ['product', "greenButton", "redButton", "blueButton"],
  methods: {
    blueButtonClicked() {
      EventBus.$emit(this.blueButton.event, this.product)
    },
    greenButtonClicked() {
      EventBus.$emit(this.greenButton.event, this.product)
    },
    redButtonClicked() {
      EventBus.$emit(this.redButton.event, this.product)
    }
  }
}
</script>

<style scoped>

.styled-button {
  margin-left: 5px;
}

</style>