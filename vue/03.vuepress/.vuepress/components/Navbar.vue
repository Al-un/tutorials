<template>
  <b-navbar toggleable="md" type="dark" variant="primary">
    <b-container>
      <!-- brand -->
      <b-navbar-brand to="/">
        <img src="https://vuepress.vuejs.org/hero.png" alt="VuePress logo" height="48">
        <span>VuePress test</span>
      </b-navbar-brand>

      <!-- toggler -->
      <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>

      <!-- navbar -->
      <b-collapse is-nav id="nav_collapse">
        <!-- menu -->
        <b-navbar-nav>
          <b-nav-item-dropdown text="Vocaloid" right>
            <b-dropdown-item to="/vocaloid/miku.html">Hatsune Miku</b-dropdown-item>
            <b-dropdown-item to="/vocaloid/luka.html">Megurine Luka</b-dropdown-item>
            <b-dropdown-item to="/vocaloid/kagamine.html">Kagamine Len/Rin</b-dropdown-item>
          </b-nav-item-dropdown>
          <router-link class="nav-link" to="/about.html">About</router-link>
        </b-navbar-nav>
      </b-collapse>
    </b-container>
  </b-navbar>
</template>

<script>
export default {
  name: "navbar"
};
</script>
