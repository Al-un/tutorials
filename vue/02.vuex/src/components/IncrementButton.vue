<template>
  <button @click.prevent="activate">+1</button>
</template>

<script>
import store from "../store";

export default {
  methods: {
    activate() {
      // send upward to App
      store.dispatch("increment");
    }
  }
};
</script>

