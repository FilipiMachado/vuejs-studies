<template>
  <div class="main-banner">
    <h1>Make Your Lunch</h1>
  </div>
</template>

<script>
export default {
  name: 'BanNer',
  data() {
    return {}
  },
}
</script>

<style scoped>
.main-banner {
  background-image: url('');
  background-position: 0 -250px;
  background-size: cover;
  height: 500px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  background-color: #3b3b3b;
}
.main-banner h1 {
  color: #fff;
  text-align: center;
  font-size: 55px;
  padding: 60px;
}
</style>
