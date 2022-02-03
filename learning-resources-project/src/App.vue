<template>
  <ul>
    <ListItems v-for="res in storedResources" :key="res.id"/>
  </ul>
</template>

<script>
import ListItems from "./components/ListItems.vue"

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
