import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    counter: 0,
    threshold: 10
  },
  mutations: {
    increment(state, value) {
      state.counter += value;
      console.log(`new state.counter: ${state.counter}`);
    },
    updateThreshold(state, newValue) {
      state.threshold = newValue;
    }
  },
  actions: {
    increment(context) {
      context.commit('increment', 1);
    },
    asyncIncrement({ commit, state }, value) {
      setTimeout(() => {
        const currValue = state.counter;
        const toAdd = currValue % 2 === 0 ? value : value + 1;
        commit('increment', toAdd);
      }, 1500);
    }
  },
  strict: true,
  getters: {
    evenCount: state =>
      state.counter % 2 === 0 ? state.counter : state.counter + 1,
    lowerThan: state => threshold => state.counter < threshold,
    lowerThanThreshold: state => state.counter < state.threshold
  }
});

export default store;
