const app = Vue.createApp({
  data() {
    return {
      userInput: "",
      tasks: [],
      taskIsVisible: true,
    };
  },
  computed: {},
  methods: {
    addTask() {
      this.tasks.push(this.userInput);
    },
    showTasks() {
      this.taskIsVisible = !this.taskIsVisible;
    },
  },
});

app.mount("#assignment");
