import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    user: {
      first_name: "Fil",
      last_name: "Machado",
      password: 2354,
      email: "filmachado@email.com",
    },
  },
  getters: {},
  mutations: {},
  actions: {},
  modules: {},
});
