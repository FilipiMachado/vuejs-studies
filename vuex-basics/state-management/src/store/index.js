import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    user: {
      first_name: "John",
      password: 123,
      last_name: "Smith",
      email: "john@smith.com",
    },
  },
  getters: {},
  mutations: {
    saveUserName(state, payload) {
      console.log(payload);
      state.user.first_name = payload;
    },
    saveUserPassword(state, payload) {
      console.log(payload);
      state.user.password = payload;
    },
  },
  actions: {
    /* saveUserName(context, payload) {
      context.commit("saveUserName", payload);
    },
    saveUserPassword(context, payload) {
      context.commit("saveUserPassword", payload);
    }, */
  },
  modules: {},
});
