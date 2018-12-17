<template>
  <div>
    <p>Dummy text: {{ text }}</p>
    <p>
      <input
        type="number"
        name="threshold"
        v-model="threshold"
        placeholder="Threshold"
        @change="updateThreshold"
      >
    </p>
    <p>
      Count via
      <code>this.$store.state.counter</code>
      : {{ countFromStore }}
    </p>
    <p>
      Count via
      <code>mapState</code>
      : {{ count }}
    </p>
    <p>Closest even number: {{ evenCount }}</p>
    <p>Lower than 10: {{ lowerThan }}</p>
    <p>Lower than {{ threshold }}: {{ lowerThanThreshold }}</p>
    <p>State threshold: {{ stateThreshold }}</p>
    <button @click="asyncIncrement">Asynchronous increment</button>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "complex-counter",
  data() {
    return {
      threshold: 10
    };
  },
  computed: {
    text() {
      return "a dummy text";
    },
    countFromStore() {
      return this.$store.state.counter;
    },
    ...mapState({
      count: state => state.counter,
      stateThreshold: state => state.threshold,
      evenCount: (state, getters) => getters.evenCount,
      lowerThan: (state, getters) => getters.lowerThan(10),
      lowerThanThreshold: (state, getters) => getters.lowerThanThreshold
    })
  },
  methods: {
    updateThreshold() {
      console.log("new threshold: " + this.threshold);
      this.$store.commit('updateThreshold', this.threshold);
    },
    asyncIncrement() {
      this.$store.dispatch("asyncIncrement", 2);
    }
  }
};
</script>

<style>
</style>