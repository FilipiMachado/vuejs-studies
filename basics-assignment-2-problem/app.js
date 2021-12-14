const app = Vue.createApp({
  data() {
    return {
        message: 'Hello My Friend!'
    };
  },
  methods: {
    alertMessage() {
        alert(this.message);
    }
  },
});

app.mount("#assignment");
