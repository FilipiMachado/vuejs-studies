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
  mutations: {},
  actions: {},
  modules: {},
});
