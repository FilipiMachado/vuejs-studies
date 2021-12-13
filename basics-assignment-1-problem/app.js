const app = Vue.createApp({
  data() {
    return {
      name: "Fil",
      age: 24,
      animalImg: "https://images.unsplash.com/photo-1639231554431-ebce02bdeacc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
    };
  },
  methods: {
    genNumber() {
      const randNum = Math.random();
      if (randNum < 0.5) {
        return "Below 0.5";
      } else {
        return "Above 0.5";
      }
    },
  },
});

app.mount("#assignment");
