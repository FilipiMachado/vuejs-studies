<template>
  <div>
    <div>{{ $route.params.nomeproduto }}</div>
    <div>{{ $route.params.valorproduto }}</div>
    <div>{{ $route.params.anoproduto }}</div>
    <router-link to="/listadeprodutos">Voltar</router-link>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>

</style>