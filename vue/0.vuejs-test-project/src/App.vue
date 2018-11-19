<template>
  <div id="app">

    <div class="sidebar">
      <img src="./assets/logo.png">
      <ul>
        <li><router-link to="/">Home</router-link></li>
        <li><router-link to="/pouet">Pouet</router-link></li>
        <li><router-link to="/news">News</router-link></li>
      </ul>
    </div>
    <div class="content">
      <router-view/>
    </div>

  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;

  display: flex;
  width: 100%;
  height: 100%;
}
.sidebar {
  width: 15%;
  background: #57b3f1;
}

.sidebar img {
  display: block;
  margin: auto;
}

.sidebar ul {
  list-style-type: none;
  width: 100%;
  margin: 0;
  padding: 0;
}
.sidebar ul li {
  width: 100%;
  border-bottom: 1px dashed teal;
}
.sidebar ul li:first-child {
  border-top: 1px dashed teal;
}
.sidebar ul li a {
  display: block;
  color: black;
  padding: 1em;
  text-decoration: none;
}
.sidebar ul li a:hover {
  color: white;
  background: #2885c4;
}

.content {
  flex: 1;
  padding: 3em;
  background: lightgray;
  overflow-y: scroll;
}
</style>
