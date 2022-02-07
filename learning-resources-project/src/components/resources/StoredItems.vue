<template>
  <ul>
    <ListItems
      v-for="item in resources"
      :key="item.id"
      :title="item.title"
      :desc="item.description"
      :link="item.link"
    />
  </ul>
</template>

<script>
import ListItems from './ListItems.vue';

export default {
  name: 'StoredItems',
  components: {
    ListItems,
  },
  props: [
    'resources'
  ],
  data() {},
};
</script>

<style scoped>
ul {
  list-style: none;
  margin: 0;
  padding: 0;
  margin: auto;
  max-width: 40rem;
}
</style>
