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
      state.counter++;
    },
    increaseTwo(state, payload) {
      state.counter = state.counter + payload.value;
    },
  },
  actions: {
    increment(context) {
      setTimeout(function() {
      context.commit('incrementOne', 10);
    }, 2000)
    },
    increase(context, payload) {
      context.commit('increaseTwo', payload);
    },
  },
  getters: {
    finalCounter(state) {
      return state.counter * 1;
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
