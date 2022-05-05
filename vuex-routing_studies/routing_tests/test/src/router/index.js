import Vue from 'vue'
import VueRouter from 'vue-router'
import PaginaInicial from '@/components/PaginaInicial.vue'
import ListaProdutos from '@/components/ListaProdutos.vue'
import Produtos from '@/components/Produtos.vue'
import Erro404 from '@/components/Erro404.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'PaginaInicial',
    component: PaginaInicial
  },
  {
    path: '/listadeprodutos',
    name: 'ListaProdutos',
    component: ListaProdutos
  },
  {
    path: '/produtos/:nomeproduto/:valorproduto/:anoproduto',
    name: 'Produtos',
    component: Produtos
  },
  {
    path: '*',
    name: 'Erro404',
    component: Erro404
  },
]

const router = new VueRouter({
  routes
})

export default router
