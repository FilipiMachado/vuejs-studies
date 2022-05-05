<template>
  <div>
    <div class="title">Eu sou a página Inicial</div>
    <div>Para qual page você quer ir?</div>
    <a href="http://localhost:8080/#/aulafilipi">Aula Filipi</a>
    <a href="http://localhost:8080/#/aulaana">Aula Ana</a>
    <router-link to="aulafilipi">Aula Filipi (certo)</router-link>
    <router-link to="aulaana">Aula Ana (certo)</router-link>,
    <div class="product-list">
      <router-link to="/detalheproduto/lapis/50">Lápis</router-link>
      <router-link to="/detalheproduto/caderno/22">caderno</router-link>
      <router-link to="/detalheproduto/borracha/5">borracha</router-link>
      <router-link to="/detalheproduto/cadeira/13">cadeira</router-link>
    </div>
  </div>
  
  
</template>

<script>
export default {
  data() {
    return {}
  }
}
</script>

<style scoped>
.title {
  font-size: 60px;
}
a {
  display: block;
}
.product-list {
  display: flex;
  flex-direction: column;
  height: 500px;
  padding-left: 30px;
  cursor: pointer;
}
</style>