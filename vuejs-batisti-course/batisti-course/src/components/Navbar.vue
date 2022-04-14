<template>
  <div id="nav">
    <router-link to="/">
      <img :src="logo" :alt="alt" id="logo">
    </router-link>
    <router-link to="/">Home</router-link> |
    <router-link to="/orders">Orders</router-link>
  </div>
</template>

<script>
export default {
  name: 'NavBar',
  props: [
    'logo',
    'alt'
  ],
  data() {
    return {}
  },
};
</script>

<style scoped>
#nav {
  background-color: #222;
  border-bottom: 4px solid #111;
  padding: 15px 50px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
}
</style>
