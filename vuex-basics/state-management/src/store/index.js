import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    data: {
      name: "",
      lastName: "",
      password: "",
      email: "",
    },
  },
  getters: {},
  mutations: {
    saveFirstName(state, payload) {
      state.data.name = payload;
    },
    saveLastName(state, payload) {
      state.data.lastName = payload;
    },
    savePassword(state, payload) {
      state.data.password = payload;
    },
    saveEmail(state, payload) {
      state.data.email = payload;
    },
  },
  actions: {},
  modules: {},
});
