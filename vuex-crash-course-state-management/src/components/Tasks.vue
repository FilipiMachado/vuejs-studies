<template>
  <div v-for="task in tasks" :key="task.id">
     <Task v-on:toggle-reminder="$emit('toggle-reminder', task.id)"
           v-on:delete-task="$emit('delete-task', task.id)" 
           :task="task"/>
  </div>
</template>

<script>
import Task from "./Task.vue"

export default {
    name: 'Tasks',
    components: {
      Task
    },
    emits: [
      'delete-task',
      'toggle-reminder'
    ],
    props: {
      tasks: Array
    },
    data() {
      return {}
    },
}
</script>

<style scoped>

</style>