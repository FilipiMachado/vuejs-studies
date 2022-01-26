<template>
  <button v-on:click="clickEvent" class="btn">Add Task</button>
</template>

<script>
export default {
  name: "Button",
  data() {
    return {};
  },
  methods: {
    clickEvent() {
      console.log("Clicked!");
    },
  },
};
</script>

<style scoped></style>
