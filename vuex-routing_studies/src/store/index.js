import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    test: 'Eu sou um teste!',
    errorMessage404: 'Erro! Página não encontrada!',
    fakeStoreAPI: 'https://fakestoreapi.com',
    accessNumber: 0,
    productName: undefined,
  },
  getters: {
  },
  mutations: {
    incrementAccessNumber(state, incrementNumber) {
      state.accessNumber += incrementNumber
    },
    getProductName(state, productName) {
      state.productName = productName
    },
  },
  actions: {
  },
  modules: {
  }
})
