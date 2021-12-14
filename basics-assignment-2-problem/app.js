const app = Vue.createApp({
  data() {
    return {
      message: "Hello My Friend!",
      number: 0,
      name: "",
    };
  },
  methods: {
    nameInput() {
        
    },
    ageInput(e) {
      this.number = e.target.value;
    },
    alertMessage() {
      alert(this.message);
    },
  },
});

app.mount("#assignment");
