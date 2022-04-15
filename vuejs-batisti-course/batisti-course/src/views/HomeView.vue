<template>
  <Banner />
  <div class="main-container">
    <h1>Mount your Lunch</h1>
    <LunchForm />
  </div>
</template>

<script>
import Banner from '../components/Banner.vue'
import LunchForm from '../components/LunchForm.vue'

export default {
  name: 'HomeView',
  components: {
    Banner,
    LunchForm,
  },
  data() {
    return {}
  },
}
</script>
