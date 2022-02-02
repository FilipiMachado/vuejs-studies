<template>
  <div>
    <h2>{{ username }}</h2>
    <h3>{{ userage }}</h3>
  </div>
</template>

<script>
export default {
  name: "ActiveUser",
  props: {
    username: {
      type: String,
      required: true
      },
    userage: {
      type: Number,
      required: true
    }
  },
  data() {
    return {
      
    };
  },
};
</script>

<style scoped></style>
