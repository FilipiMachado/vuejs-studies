const app = Vue.createApp({
  data() {
    return {
      enteredValue: "",
      goals: [],
    };
  },
  computed: {
   
  },
  methods: {
   addGoal(){
      this.goals.push(this.enteredValue)
    }
  },
   removeGoal(idx){
     this.goals.splice(idx, 1)
   }
});

app.mount("#user-goals");
