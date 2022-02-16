<template>
  <button @click="addOne">Add 1</button>
</template>

<script>
export default {
  data() {},
  methods: {
    addOne() {
      this.$store.commit("incrementOne")
    },
  },
};
</script>

<style scoped></style>
