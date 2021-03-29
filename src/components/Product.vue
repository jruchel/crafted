<template>
  <v-sheet min-height="250" class="fill-height" color="transparent">
    <v-lazy transition="fade-transition" :v-model="visible" height="100%" width="100%" :options="{
          threshold: .5
        }">
      <v-card hover width="100%" height="100%" class="card-outter" @click="cardClicked">
        <v-card-title>
          {{ product.name }}
          <v-spacer>
          </v-spacer>
          {{ currency.sign }}{{ product.price }}
        </v-card-title>
        <v-card-subtitle>
          {{ product.tagline }}
        </v-card-subtitle>
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
            }} {{currency.sign}}{{ product.price }}
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
          <v-slide-x-transition>
            <div class="icon cart" style="margin-left: 10px" v-show="active">

              <svg id="cart" enable-background="new 0 0 511.728 511.728" height="40px" viewBox="0 0 511.728 511.728"
                   width="40px"
                   xmlns="http://www.w3.org/2000/svg"
              >
                <path :class="{active}"
                      d="m147.925 379.116c-22.357-1.142-21.936-32.588-.001-33.68 62.135.216 226.021.058 290.132.103 17.535 0 32.537-11.933 36.481-29.017l36.404-157.641c2.085-9.026-.019-18.368-5.771-25.629s-14.363-11.484-23.626-11.484c-25.791 0-244.716-.991-356.849-1.438l-17.775-65.953c-4.267-15.761-18.65-26.768-34.978-26.768h-56.942c-8.284 0-15 6.716-15 15s6.716 15 15 15h56.942c2.811 0 5.286 1.895 6.017 4.592l68.265 253.276c-12.003.436-23.183 5.318-31.661 13.92-8.908 9.04-13.692 21.006-13.471 33.695.442 25.377 21.451 46.023 46.833 46.023h21.872c-3.251 6.824-5.076 14.453-5.076 22.501 0 28.95 23.552 52.502 52.502 52.502s52.502-23.552 52.502-52.502c0-8.049-1.826-15.677-5.077-22.501h94.716c-3.248 6.822-5.073 14.447-5.073 22.493 0 28.95 23.553 52.502 52.502 52.502 28.95 0 52.503-23.553 52.503-52.502 0-8.359-1.974-16.263-5.464-23.285 5.936-1.999 10.216-7.598 10.216-14.207 0-8.284-6.716-15-15-15zm91.799 52.501c0 12.408-10.094 22.502-22.502 22.502s-22.502-10.094-22.502-22.502c0-12.401 10.084-22.491 22.483-22.501h.038c12.399.01 22.483 10.1 22.483 22.501zm167.07 22.494c-12.407 0-22.502-10.095-22.502-22.502 0-12.285 9.898-22.296 22.137-22.493h.731c12.24.197 22.138 10.208 22.138 22.493-.001 12.407-10.096 22.502-22.504 22.502zm74.86-302.233c.089.112.076.165.057.251l-15.339 66.425h-51.942l8.845-67.023 58.149.234c.089.002.142.002.23.113zm-154.645 163.66v-66.984h53.202l-8.84 66.984zm-74.382 0-8.912-66.984h53.294v66.984zm-69.053 0h-.047c-3.656-.001-6.877-2.467-7.828-5.98l-16.442-61.004h54.193l8.912 66.984zm56.149-96.983-9.021-67.799 66.306.267v67.532zm87.286 0v-67.411l66.022.266-8.861 67.145zm-126.588-67.922 9.037 67.921h-58.287l-18.38-68.194zm237.635 164.905h-36.426l8.84-66.984h48.973l-14.137 61.217c-.784 3.396-3.765 5.767-7.25 5.767z"/>
              </svg>
            </div>
          </v-slide-x-transition>
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
      visible: false,
      active: false,
      buttonClicked: false
    }
  },
  methods: {
    cardClicked() {
      if (this.buttonClicked === false) {
        this.$emit('click')
      } else {
        this.buttonClicked = false
      }
    },
    blueButtonClicked() {
      this.buttonClicked = true
      EventBus.$emit(this.blueButton.event, this.product)
    },
    greenButtonClicked() {
      this.buttonClicked = true
      this.active = true
      setTimeout(e => this.active = false, 1000)
      EventBus.$emit(this.greenButton.event, this.product)
    },
    redButtonClicked() {
      this.buttonClicked = true
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
  margin-right: 5px;
  margin-bottom: 5px;
}

.active {
  transform-origin: center;
  animation: animate-cart 1s linear infinite
}

.icon.cart svg {
  fill: #43A047
}

@keyframes animate-cart {
  10% {
    transform: rotate(0deg)
  }
  20% {
    transform: rotate(0deg)
  }
  30% {
    transform: rotate(-20deg)
  }
  40% {
    transform: rotate(20deg)
  }
  50% {
    transform: rotate(-20deg)
  }
  60% {
    transform: rotate(20deg)
  }
  70% {
    transform: rotate(-20deg)
  }
  80% {
    transform: rotate(20deg)
  }
  90% {
    transform: rotate(0deg)
  }
  100% {
    transform: rotate(0deg)
  }
}

</style>