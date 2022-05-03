import Vue from 'vue'
import VueRouter from 'vue-router'
import AulaFilipi from '../views/AulaFilipi.vue'
import AulaAna from '../views/AulaAna.vue'
import PaginaInicial from'../paginas/PaginaInicial.vue'
import PaginaErro404 from '../paginas/PaginaErro404.vue'

Vue.use(VueRouter)

const routes = [
  /* {
    path: '/',
    name: 'home',
    component: HomeView
  }, */
  {
    path: '/aulafilipi',
    name: 'AulaFilipi',
    component: AulaFilipi
  },
  {
    path: '/aulaana',
    name: 'AulaAna',
    component: AulaAna
  },
  {
    path: '/',
    name: 'PaginaInicial',
    component: PaginaInicial
  },
  {
    path: '*',
    name: 'PaginaErro404',
    component: PaginaErro404
  }

]

const router = new VueRouter({
  routes
})

export default router
