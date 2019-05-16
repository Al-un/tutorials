if (window.Vue === undefined) {
  window.Vue = require("vue");
} else {
  console.log("Vue is already defined");
}

const ButtonCounter = Vue.component("button-counter", {
// Vue.component("button-counter", {
  data: function() {
    return {
      count: 0
    };
  },
  template:
    '<button v-on:click="count++">You clicked me {{ count }} times.</button>'
});

const ButtonNumber = Vue.component('button-number', {
// Vue.component("button-number", {
  data: function() {
    return {
      val: 0
    };
  },
  methods: {
    reset() {
      this.val = 0;
    }
  },
  template: `
  <div>
    <div>
      <button v-on:click="val--">-</button>
      <input type="number" v-model="val" />
      <button v-on:click="val++">+</button>
    </div>
    <div>
      <button v-on:click="reset">Reset</button>
    </div>
    <div>
      <span>Val is {{ val }}</span>
    </div>
  </div>
  `
});

module.exports = {
  ButtonCounter,
  ButtonNumber
};
