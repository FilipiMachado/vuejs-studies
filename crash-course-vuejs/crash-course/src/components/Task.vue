<template>
    <h3>{{ text.task }}</h3>
</template>

<script>
export default {
  name: "Task",
  props: {
    task: Object,
  },
  data() {
    return {};
  },
};
</script>

<style scoped></style>
