const app = Vue.createApp({
  data() {
    return {
      counter: 0,
    };
  },
  computed: {
    isGreaterThan() {
        if(this.counter < 37) {
            return "Not there yet..."
        } else if (this.counter === 37) {
            return this.counter
        } else {
            return "Too much!"
        }
    }
  },
  methods: {
    calcValue(num) {
      this.counter += num;
    },
  },
});

app.mount("#assignment")