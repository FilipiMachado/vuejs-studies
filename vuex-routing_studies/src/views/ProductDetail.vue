<template>
  <div>
    <div v-if="productInfo">
      Product Detail
      <div>{{ productInfo.title }}</div> 
      <div>{{ productInfo.description }}</div>
      <div>{{ productInfo.price }}</div>
      <div>{{ $store.state.test }}</div>
    </div>
    <div v-else>Loading...</div>
  </div>
  
</template>

<script>
export default {
  name: 'ProductDetail',
  data() {
    return {
      productInfo: undefined,
      //isLoading: false,
    }
  },
  mounted() {
    console.log(this.$store.state.test)
    this.getSingleProductInfo()
  },
  methods: {
    getSingleProductInfo() {
      fetch(`https://fakestoreapi.com/products/${this.$route.params.idproduto}`)
            .then(res=>res.json())
            .then((json)=>{
              //console.log(json)
              this.productInfo = json
              this.$store.commit('getProductName', this.productInfo.title)
              })
    }
  },
}
</script>

<style scoped>

</style>