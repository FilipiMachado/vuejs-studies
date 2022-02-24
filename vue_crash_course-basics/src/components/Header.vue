<template>
  <header>
    <h1>{{ title }}</h1>
    <Button v-on:toggle-add-task="$emit('toggle-add-task')" text="Add Task" color="green"/>
  </header>
</template>

<script>
import Button from "./Button.vue"

export default {
  name: "Header",
  components: {
    Button
  },
  props: {
    title: {
      type: String,
      default: "Task Tracker"
    }
  },
  data() {
    return {}
  },
  methods: {},
};
</script>

<style scoped>
header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
}
</style>
