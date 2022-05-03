<template>
  <div @click="backToMain" class="header">
    Eu sou um Header
  </div>
</template>

<script>
export default {
  methods: {
    backToMain() {
      this.$router.push('/')
    }
  }
}
</script>

<style scoped>
.header {
  background-color: #5f5fff;
  height: 50px;
  color: #fff;
  font-size: 20px;
  cursor: pointer;
}
</style>