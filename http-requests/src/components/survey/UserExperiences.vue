<template>
  <section>
    <base-card>
      <h2>Submitted Experiences</h2>
      <div>
        <base-button v-on:click="loadExperiences">Load Submitted Experiences</base-button>
      </div>
      <ul>
        <survey-result
          v-for="result in results"
          :key="result.id"
          :name="result.name"
          :rating="result.rating"
        ></survey-result>
      </ul>
    </base-card>
  </section>
</template>

<script>
import axios from "axios";

import SurveyResult from './SurveyResult.vue';

export default {
  components: {
    SurveyResult,
  },
  data() {
    return {
      results: [],
    }
  },
  methods: {
    loadExperiences() {
      axios.get('https://vue-http-request-9d847-default-rtdb.firebaseio.com/surveys.json').then(response => {
        const results = []
        const data = response.data
        for (const id in data) {
          results.push({
            id: id,
            name: data[id].name,
            rating: data[id].rating
          })
        }
        console.log(results)
        this.results = results
      })
    }
  }
};
</script>

<style scoped>
ul {
  list-style: none;
  margin: 0;
  padding: 0;
}
</style>