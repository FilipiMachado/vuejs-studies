<template>
  <div>
    <footer id="footer">
      <p>Make your Lunch &copy; 2022</p>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'FooTer',
  data() {
    return {}
  },
};
</script>

<style scoped>
#footer {
  height: 200px;
  background-color: #222;
  border-top: 4px solid #111;
  color: #fcba03;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
}
</style>
