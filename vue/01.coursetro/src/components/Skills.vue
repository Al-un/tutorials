<template>
  <div class="container">
    <form @submit.prevent="addSkill">
      <input
        type="text"
        placeholder="Enter a new skill here..."
        v-model="skill"
        v-validate="'min:5'"
        name="skill"
      >
      <!-- <input type="checkbox" id="checkbox" v-model="checked" /> -->
      <transition
        name="alert-in"
        enter-active-class="animated flipInX"
        leave-active-class="animated flipOutX"
      >
        <p class="alert" v-if="errors.has('skill')">{{ errors.first('skill') }}</p>
      </transition>
    </form>

    <div class="holder">
      <ul>
        <transition-group
          name="list"
          enter-active-class="animated bounceInUp"
          leave-active-class="animated bounceOutDown"
        >
          <li v-for="(data, index) in skills" :key="data.name">
            {{data.name}}
            <i class="fa fa-minus-circle" v-on:click="remove(index)"></i>
          </li>
        </transition-group>
      </ul>

      <transition name="fade">
        <p v-if="skills.length === 0">You have no skill :(</p>
        <p v-else-if="skills.length === 1">Your first skill! Keep it up!</p>
        <p v-else>These are the skills that you possess.</p>
      </transition>
    </div>
  </div>
  <!--
  <div class="skills">
    <h1 v-once>{{name}}</h1>
    {{ btnState ? 'This button is disabled' : 'This button is active'}}
    <button
      v-on:click="changeName"
      v-bind:disabled="btnState"
    >Change name</button>
    {{name}}
    <ul>
      <li v-for="(data, index) in skills" :key="index">{{index}}. {{data.name}}</li>
    </ul>

     <div v-bind:class="{alert: showAlert, 'another-class': showClass}"></div>
    <div v-bind:class="pouetClass" v-bind:style="{border: border}"></div>
  </div>
  -->
</template>

<script>
export default {
  name: "Skills",
  data() {
    return {
      // name: "Coursetro",
      // btnState: true,
      // showAlert: true,
      // showClass: true,
      // pouetClass: {
      //   pouet:true,
      //   plop: true
      // },
      // border: '5px solid green',
      checked: false,
      skill: "",
      skills: [{ name: "Vue.js" }, { name: "Frontend Developer" }]
    };
  },

  methods: {
    addSkill() {
      this.$validator.validateAll().then(result => {
        if (result) {
          // key is skill name. Ensure unicity
          if (this.skills.some(element => element.name === this.skill)) {
            // fuck
            console.log(`${this.skill} is already added`);
            throw new Error(`${this.skill} is already added`);
          } else {
            this.skills.push({ name: this.skill });
            console.log(`${this.skill} is now added`);
            this.skill = "";
          }
        }
      });
    },
    remove(id) {
      this.skills.splice(id, 1);
    }
  }
};
</script>

<style scoped>
@import "https://cdn.jsdelivr.net/npm/animate.css@3.5.1";
@import "https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css";

.holder {
  background: #fff;
}

ul {
  margin: 0;
  padding: 0;
  list-style-type: none;
}

ul li {
  padding: 20px;
  font-size: 1.3em;
  background-color: #e0edf4;
  border-left: 5px solid #3eb3f6;
  margin-bottom: 2px;
  color: #3e5252;
}

p {
  text-align: center;
  padding: 30px 0;
  color: gray;
}

.container {
  box-shadow: 0px 0px 40px lightgray;
}

input {
  width: calc(100% - 40px);
  border: 0;
  padding: 20px;
  font-size: 1.3em;
  background-color: #37c5cf;
  color: rgb(7, 75, 75);
}

.alert {
  background: #fdf2ce;
  font-weight: bold;
  display: inline-block;
  padding: 5px;
  margin-top: -20px;
}

.alert-in-enter-active {
  animation: bounce-in 0.5s;
}

.alert-in-leave-active {
  animation: bounce-in 0.5s reverse;
}

@keyframes bounce-in {
  0% {
    transform: scale(0);
  }
  50% {
    transform: scale(1.5);
  }
  100% {
    transform: scale(1);
  }
}
</style>