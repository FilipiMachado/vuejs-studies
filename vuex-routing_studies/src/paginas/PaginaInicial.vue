<template>
  <div>
    <div class="title">Eu sou a página Inicial</div>
    <div>Para qual page você quer ir?</div>
    <a href="http://localhost:8080/#/aulafilipi">Aula Filipi</a>
    <a href="http://localhost:8080/#/aulaana">Aula Ana</a>
    <router-link to="aulafilipi">Aula Filipi (certo)</router-link>
    <router-link to="aulaana">Aula Ana (certo)</router-link>
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
</style>