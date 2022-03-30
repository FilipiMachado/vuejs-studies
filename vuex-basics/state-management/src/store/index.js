import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    user: {
      first_name: "John",
      last_name: "Smith",
      email: "john@smith.com",
    },
  },
  getters: {},
  mutations: {},
  actions: {},
  modules: {},
});
