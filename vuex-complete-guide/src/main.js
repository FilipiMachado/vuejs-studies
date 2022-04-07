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
    increaseCounter(state, payload) {
      console.log(payload);
      state.counter = state.counter + payload.value;
    },
  },
})

const app = createApp(App);

app.use(store);

app.mount('#app');
