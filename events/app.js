const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: "",
      number: "",
    };
  },
  methods: {
    setName(event) {
      this.number = event.target.value;
    },
    add(num) {
      this.counter = this.counter + num;
    },
    reduce(num) {
      this.counter = this.counter - num;
    },
  },
});

app.mount("#events");
