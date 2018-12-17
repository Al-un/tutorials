<template>
  <div id="app">
    <h3>Increment</h3>
    <increment></increment>
    <h3>Counter:</h3>
    <counter></counter>
    <h3>Complex Counter:</h3>
    <complex-counter></complex-counter>
  </div>
</template>

<script>
// step 2
import store from "./store";

import Counter from './components/CounterDisplay';
import Increment from './components/IncrementButton';
import ComplexCounter from "./components/ComplexCounter";

export default {
  name: 'app',
  // provide the store using the "store" option.
  // this will inject the store instance to all child components.
  store,
  components: {
    ComplexCounter,
    Counter,
    Increment
  }
}
</script>

<style>
</style>
