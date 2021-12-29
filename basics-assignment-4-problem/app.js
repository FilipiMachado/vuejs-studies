const app = Vue.createApp({
  data() {
    return {
      userInput: "",
    };
  },
  methods: {
    getUserInput(e) {
      this.userInput = e.target.value;
    },
  },
  computed: {},
});

app.mount("#assignment");
