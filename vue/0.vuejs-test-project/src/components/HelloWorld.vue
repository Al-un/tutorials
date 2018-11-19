<template>
  <div class='hello'>

    <div class='card'>
      <h1>{{ msg }}</h1>
    </div>

    <div class='card'>
      <h2>Essential Links</h2>
      <ul>
        <!-- https://vuejs.org/v2/guide/list.html#key -->
        <li v-for='link in essentialLinks' :key='link.href'>
          <!-- https://forum-archive.vuejs.org/topic/4287/vue-js-2-0-interpolation-inside-attributes-are-deprecated/2 -->
          <a :href="link.href">{{link.text}}</a>
        </li>
      </ul>
    </div>
    
    <div class='card'>
      <h2>Ecosystem</h2>
      <ul>
        <li><a href='http://router.vuejs.org/' target='_blank'>vue-router</a></li>
        <li><a href='http://vuex.vuejs.org/' target='_blank'>vuex</a></li>
        <li><a href='http://vue-loader.vuejs.org/' target='_blank'>vue-loader</a></li>
        <li><a href='https://github.com/vuejs/awesome-vue' target='_blank'>awesome-vue</a></li>
      </ul>
    </div>
    
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      essentialLinks: [
        { href: 'https://vuejs.org', text: 'Core Docs' },
        { href: 'https://forum.vuejs.org', text: 'Forum' },
        { href: 'https://chat.vuejs.org', text: 'Community Chat' },
        { href: 'https://twitter.com/vuejs', text: 'Twitter' },
        { href: 'http://vuejs-templates.github.io/webpack/', text: 'Docs for This Template' }
      ],
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add 'scoped' attribute to limit CSS to this component only -->
<style scoped>
h1,
h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
