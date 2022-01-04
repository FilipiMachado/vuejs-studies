const app = Vue.createApp({
  data() {
    return {
      enteredGoalValue: "",
      goals: [],
    };
  },
  computed: {},
  methods: {
    addGoal() {
      this.goals.push(this.enteredGoalValue);
      console.log(this.goals)
      console.log(this.goals.length)
    },
  },
});

app.mount("#user-goals");
