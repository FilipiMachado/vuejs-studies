const app = Vue.createApp({
  data() {
    return {
      userInput: "",
      tasks: [],
    };
  },
  computed: {},
  methods: {
    addTask() {
      this.tasks.push(this.userInput);
    },
    showTasks() {
      
    }
  },
});

app.mount("#assignment");
