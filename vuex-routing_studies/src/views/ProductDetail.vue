<template>
  <div>
    Product Detail
    <div>{{ $route.params.nomedoproduto }}</div> 
    <div>{{ $route.params.precodoproduto }}</div>
  </div>
  
</template>

<script>
export default {
  name: 'ProductDetail',
  data() {
    return {}
  }
}
</script>

<style scoped>

</style>