import vue from 'vue';
import vuex from 'vuex';
import axios from 'axios';
import Vue from 'vue';

Vue.use(vuex, axios)

export default new vuex.Store({
  state: {
    posts: [],
  },
  mutations: {
    set_posts(state, posts) {
      state.posts = posts
    },
  },
  actions: {
    loadPosts({commit}) {
      axios
          .get('https://jsonplaceholder.typicode.com/posts')
          .then((payload) => {
            console.log(payload.data)
            let posts = payload.data
            commit('set_posts', posts)
          })
          .catch((error => {
            console.log(error)
          }))
    },
  },
})
