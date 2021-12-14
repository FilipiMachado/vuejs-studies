const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: "",
      age: 0,
    };
  },
  methods: {
    setName(event) {
      this.name = event.target.value;
    },
    add(num) {
      this.counter = this.counter + num;
    },
    reduce(num) {
      this.counter = this.counter - num;
      // this.counter--;
    },
    setAge(event) {
      this.age = event.target.value;
    },
    clearInput() {
      this.age = "";
    },
  },
});

app.mount("#events");
