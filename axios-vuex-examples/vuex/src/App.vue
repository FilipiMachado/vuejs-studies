<template>
  <div>
    <div v-for="(item, idx) in posts" :key="idx">
      <h1 >{{ item.title }}</h1>
      <p>{{ item.body }}</p>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'app',
  mounted() {
    this.$store.dispatch('loadPosts')
  },
  computed: {
    ...mapState([
      'posts'
    ])
  },
}
</script>

<style>

</style>
