const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: "",
      age: "",
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
    outputAge() {
      if (this.age == "") {
        return "";
      }
      return `${this.age} years old.`;
    },
    clearInput() {
      this.age = "";
    },
  },
});

app.mount("#events");
