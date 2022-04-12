import vue from 'vue';
import vuex from 'vuex';
import axios from 'axios';
import Vue from 'vue';

Vue.use(vuex, axios)

export default new vuex.Store({
  state: {
    test: 'test 123',
  }
})
