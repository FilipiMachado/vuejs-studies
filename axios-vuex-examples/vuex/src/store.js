import vue from 'vue';
import vuex from 'vuex';
import axios from 'axios';
import Vue from 'vue';

Vue.use(vuex, axios)

export default new vuex.Store({
  state: {
    posts: [],
  },
  actions: {
    loadPosts() {
      axios
          .get('https://jsonplaceholder.typicode.com/posts')
          .then((data) => {
            this.posts = data
          })
          .catch((error => {
            console.log(error)
          }))
    },
  },
  mutations: {

  },
})
