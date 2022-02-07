<template>
  <ul>
    <ListItems />
  </ul>
</template>

<script>
import ListItems from "./components/resources/ListItems.vue"

export default {
  components: {
    ListItems
  },
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
