<template>
  <div>
    <h1>My name is: {{ myName }}</h1>
  </div>
</template>

<script>
export default {
  name: 'LifeCycle',
  data() {
    return {
      myName: "Don't know yet",
    }
  },
};
</script>

<style scoped>

</style>