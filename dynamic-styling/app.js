const app = Vue.createApp({
  data() {
    return {
      boxASelected: false,
      boxBSelected: false,
      boxCSelected: false,
    };
  },
  methods: {
    boxSelected(box) {
      if (box === "A") {
        this.boxASelected = true;
      }
    },
  },
  computed: {},
});

app.mount("#styling");
