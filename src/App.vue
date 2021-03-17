<template>
  <div>
    <Navigation/>
    <router-view></router-view>
  </div>
</template>

<script>
import Navigation from "@/components/Navigation";
import EventBus from "@/event-bus";
import axios from "axios";

export default {
  name: 'App',
  mounted() {
    EventBus.$on('send-http-request', args => {
      this.sendRequest(args[0], args[1])
    })
  },
  components: {
    Navigation,
  },
  inject: ["appAddress"],
  data: () => ({}),
  methods: {
    sendRequest(endpoint, onComplete) {
      let address = this.appAddress + endpoint
      console.log(endpoint)
      axios.get(address).then(value => onComplete(value.data))
    }
  }
};
</script>
<style>
.button {
  font-size: 15px;
}
</style>
