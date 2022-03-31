import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    user: {
      first_name: "",
      last_name: "",
      password: "",
      email: "",
    },
  },
  getters: {},
  mutations: {
    saveFirstName(state, payload) {
      state.user.first_name = payload;
    },
    saveLastName(state, payload) {
      state.user.last_name = payload;
    },
    savePassword(state, payload) {
      state.user.password = payload;
    },
    saveEmail(state, payload) {
      state.user.email = payload;
    },
  },
  actions: {},
  modules: {},
});
