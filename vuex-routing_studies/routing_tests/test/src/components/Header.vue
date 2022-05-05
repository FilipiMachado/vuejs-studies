<template>
  <div @click="goToHome()">
    <h2>Site by: Filipi</h2>
    <h2>Teacher: Mira</h2>
  </div>
</template>

<script>
export default {
  methods: {
    goToHome() {
      this.$router.push('/')
    },
  }
}
</script>

<style scoped>
div {
  background-color: tomato;
  cursor: pointer;
}
</style>