<template>
  <div id="main-container">
    <header>
      <div class="container">
        <span>Some header here</span>
        <nuxt-link to="/">Home</nuxt-link>
        <nuxt-link to="/tutorial">Tuto</nuxt-link>
      </div>
    </header>
    <main>
      <div class="container">
        <nuxt/>
      </div>
    </main>
    <footer>
      <div class="text">Link to different documentations:</div>
      <div class="links">
        <a href="https://nuxtjs.org/api">
          <nuxt-logo/>
        </a>
        <a href="https://vuejs.org/v2/guide/" class="source-link vuejs">
          <img src="https://vuejs.org/images/logo.png" alt="VueJS logo">
          <span>Vue.js</span>
        </a>
      </div>
    </footer>
  </div>
</template>

<script>
import NuxtLogo from "@/components/ui/NuxtLogo";

export default {
  components: {
    NuxtLogo
  }
};
</script>


<style lang="scss" scoped>
#main-container {
  min-height: 100vh;
  display: flex;
  flex-flow: column nowrap;
}

header {
  height: 50px;
  background-color: $color-primary;
  color: white;
  div {
    font-size: 30px;
    line-height: 50px;
    padding: 0;
  }
}

.container {
  width: 96%;
  max-width: 1000px;
  margin: auto;

  main > & {
    padding: 1rem 0px;
  }
}

main {
  flex: 1;
}

footer {
  background-color: #90a4ae; // BlueGray 300
  padding: 2rem 0px;
  text-align: center;
  div.text {
    margin: 1rem 0px;
    color: $font-black;
  }

  div.links {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  img,
  svg {
    height: 40px;
    margin: 0px 1rem;
    vertical-align: middle;
  }
  a {
    text-decoration: none;
  }

  .vuejs {
    display: inline-block;
    font-size: 1.5em;
    line-height: 40px;
    color: #2c3e50;
    font-weight: 500;
    font-family: "Dosis", "Source Sans Pro", "Helvetica Neue", Arial, sans-serif;
  }
}
</style>
