import Vue from "vue";
import { configure } from "@storybook/vue";
import MyButton from "../stories/Button.vue";

Vue.component("my-button", MyButton);

function loadStories() {
  require("../stories/index.js");
}

configure(loadStories, module);
