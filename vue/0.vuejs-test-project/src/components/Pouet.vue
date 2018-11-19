<template>
<div>
    <div class="pouet card">

        <p v-if="count > 0">Pouet !!. Currently counting {{ count }} </p>
        <p v-else>No pouet so far :'( Click on pouet button to have some hit!</p>

        <button v-on:click="count++">Pouet!</button>
        <!-- synonym but shorthand -->
        <button @click="incrementCount">Pouet!</button>

    </div>

    <div class="pouet card">
        <input type="text" v-model="msg">
        <p>Message is: {{ msg }}</p>
        <p>Message with v-text is <span v-text="msg"></span></p>
    </div>

    <div class="pouet card">
      <h2>Testing features:</h2>

      <h4>Testing v-if with v-for:</h4>
      <pre>&lt;li v-for="p in test" :key="p.name" v-if="p.pouet &gt; 0"&gt;</pre>
      <ul>
        <li v-for="p in test" :key="p.name" v-if="p.pouet > 0">
          {{p.name}}: {{p.pouet}}
        </li>
      </ul>

      <h4>Computed values:</h4>
      <p>CountedPouet: {{ countedMessage }}</p>

    </div>

  
</div>
</template>

<script>
export default {
  name: 'Pouet',

  data () {
    return {
      msg: 'Pouet',
      count: 0,
      test: [
        {name: 'aa', pouet: 4},
        {name: 'bb', pouet: 0},
        {name: 'cc', pouet: 2},
        {name: 'dd', pouet: -1}
      ]
    }
  },

  computed: {
    countedMessage: function () {
      return this.msg + ': ' + this.count
    }
  },

  methods: {
    incrementCount () {
      this.count++
    }
  }
}
</script>

<style scoped>
.pouet {
  width: 65%;
  margin: 2em auto;
}
</style>