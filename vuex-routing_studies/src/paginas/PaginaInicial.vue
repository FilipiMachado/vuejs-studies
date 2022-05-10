<template>
  <div>
    <div class="title">Eu sou a página Inicial</div>
    <div v-for="product in products" :key="product.id">
      <router-link :to="'/detalheproduto/' + product.id">{{ product.title }}</router-link>
    </div>
    <div>Vezes Acessada: {{ $store.state.accessNumber }}</div>
    <div>{{ $store.state.productName }}</div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      products: [],
    }
  },
  mounted() {
    console.log(this.$store.state.test)
    console.log(this.$store.state.productName)
    this.getProducts()
    //this.$store.state.accessNumber += 1
    this.$store.commit('incrementAccessNumber', 2)
  },
  methods: {
    getProducts() {
      fetch(`${this.$store.state.fakeStoreAPI}/products`)
            .then(res=>res.json())
            .then((json)=> {
              //console.log(json)
              this.products = json
              })
    }
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