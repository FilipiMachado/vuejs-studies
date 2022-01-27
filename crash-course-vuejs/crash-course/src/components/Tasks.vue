<template>
  <div v-for="task in tasks" :key="task.id">
    <Task v-on:delete-task="$emit('delete-task', task.id)" :task="task"/>
  </div>
</template>

<script>
import Task from "./Task.vue"

export default {
  name: "Tasks",
  components: {
    Task
  },
  props: {
    tasks: Array
  },
  data() {
    return {};
  },
  emits: ['delete-task']
};
</script>

<style scoped></style>
