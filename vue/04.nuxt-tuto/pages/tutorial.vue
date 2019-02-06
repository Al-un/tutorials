<template>
  <div>
    <tuto-card
      key="scss"
      title="SCSS"
      sources="https://hackernoon.com/how-i-use-scss-variables-mixins-functions-globally-in-nuxt-js-projects-while-compiling-css-utilit-58bb6ff30438"
    >
      <p>Adding SCSS:</p>
      <ul>
        <li>
          Adding
          <code>node-sass</code> and
          <code>sass-loader</code>
        </li>
        <li>
          Using
          <a href="https://github.com/nuxt-community/style-resources-module">Style resources</a> for exposing .scss file
        </li>
      </ul>
    </tuto-card>

    <tuto-card
      key="transition"
      title="Transition"
      sources="https://vuejs.org/v2/guide/transitions.html"
    >
      Transitions are added at
      <code>tuto-card</code> level and is transition is
      flagged as
      <code>appear</code>.
    </tuto-card>
  </div>
</template>

<script>
import TutoCard from "@/components/tutorial/TutoCard";

export default {
  components: {
    TutoCard
  }
};
</script>



<style lang="scss" scoped>
</style>
