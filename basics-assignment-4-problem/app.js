const app = Vue.createApp({
  data() {
    return {
      userInput: "",
      isActive: false,
      isHidden: false,
      inputBackgroundColor: "",
    };
  },
  methods: {
    getUserInput(e) {
      this.userInput = e.target.value;
    },
    toggleDisplay(classSelected) {
        if(classSelected === 'active') {
            this.isActive = !this.isActive
        }
    }
  },
  computed: {},
});

app.mount("#assignment");
