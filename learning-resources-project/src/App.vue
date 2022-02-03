<template>
  <ul>
    <h1>Learning Resources</h1>
  </ul>
</template>

<script>
export default {
  data() {
    return {
      storedResources: [
          {
            id: 'official-guide', 
            title: 'Official Guide', 
            description: 'The official Vue.js documentation.',
            link: 'https://vuejs.org'
          },
          {
            id: 'google', 
            title: 'Google', 
            description: 'Learn to google...',
            link: 'https://google.com'
          },
        ],
    };
  },
};
</script>

<style scoped></style>
