<template>
  <header>
    <h1>{{ title }}</h1>
    <Button v-on:button-click="$emit('toggle-add-task')" 
            :text="!showAddTask ? 'Add Task' : 'Hide Task'" 
            :color="!showAddTask ? 'green' : 'red'"
            />
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
    },
    showAddTask: Boolean
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
