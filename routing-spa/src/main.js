import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';

import App from './App.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/teams', component } // our-domain/teams ...
  ]
})

const app = createApp(App)

app.mount('#app');
