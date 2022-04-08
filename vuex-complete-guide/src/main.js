import { createApp } from 'vue';
import { createStore } from 'vuex';

import App from './App.vue';

const store = createStore({
  state() {
    return {
      counter: 0,
    };
  },
  mutations: {
    incrementOne(state) {
      setTimeout(function() {
        state.counter++;
      }, 2000)
    },
    increaseTwo(state, payload) {
      state.counter = state.counter + payload.value;
    },
  },
  actions: {
    increment(context) {
      context.commit('incrementOne', 10);
    },
  },
  getters: {
    finalCounter(state) {
      //console.log(state);
      return state.counter * 3;
    },
    normalizedCounter(_, getters) {
      const finalCounter = getters.finalCounter;
      if (finalCounter < 0) {
        return 0;
      }
      if (finalCounter > 100) {
        return 100;
      }
      return finalCounter;
    },
  },
})

const app = createApp(App);

app.use(store);

app.mount('#app');
