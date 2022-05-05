<template>
  <div>
    <div v-if="isLoading">A página está carregando, por favor espere</div>
    <div v-else v-for="product in productList" :key="product.id">
      <p>{{ product.title }}</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      productList: [],
      isLoading: undefined,
    }
  },
  mounted() {
    this.getProducts()
    console.log(this.productList)
  },
  methods: {
    getProducts() {
      this.isLoading = true
      fetch('https://fakestoreapi.com/products')
            .then(res=>res.json())
            .then((json)=> {
              this.productList = json
              this.isLoading = false
            })
    }
  }
}
</script>

<style scoped>
div {
  display: flex;
  flex-direction: column;
}
</style>