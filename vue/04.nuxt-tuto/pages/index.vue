<template>
  <div>
    <div>Helloworld</div>

    <asyncer :ip="ip"/>

    <h1>Transitions</h1>

    <button v-on:click="show = !show">Toggle</button>
    <transition name="fade">
      <span v-if="show">hello</span>
    </transition>
  </div>
</template>

<script>
import Asyncer from "@/components/tutorial/Asyncer";

export default {
  components: {
    Asyncer
  },
  data() {
    return {
      show: true
    };
  },
  async asyncData({ $axios, req, res }) {
    // Please check if you are on the server side before
    // using req and res
    if (process.server) {
      return { ip: req.headers.host };
    }

    const ipRes = await $axios.$get("http://icanhazip.com");
    console.log("ipRes: ", ipRes);
    return { ip: ipRes };
  }
};
</script>

<style scoped>
/* .fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
} */
/* Enter and leave animations can use different */
/* durations and timing functions.              */
.fade-enter-active {
  transition: all 0.3s ease;
}
.fade-leave-active {
  transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}
.fade-enter, .fade-leave-to
/* .slide-fade-leave-active below version 2.1.8 */ {
  transform: translateX(10px);
  opacity: 0;
}
</style>
