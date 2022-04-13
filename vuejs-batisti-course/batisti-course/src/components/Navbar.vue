<template>
  <div>
    <router-link to="/">
      <img src="" id="logo">
    </router-link>
    <router-link to="/">Home</router-link> |
    <router-link to="/orders">Orders</router-link>
  </div>
</template>

<script>
export default {
  name: 'NavBar',
  data() {
    return {}
  },
};
</script>

<style scoped>

</style>
