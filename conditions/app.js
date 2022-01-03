const app = Vue.createApp({
  data() {
    return {
      enteredGoalValue: "",
      goals: ["Finish the course!"],
    };
  },
  computed: {},
  methods: {
    addGoal() {
      this.goals.push(this.enteredGoalValue);
      console.log(this.goals)
    },
  },
});

app.mount("#user-goals");
