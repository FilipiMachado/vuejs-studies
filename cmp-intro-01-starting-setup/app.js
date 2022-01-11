const app = Vue.createApp({
  data() {
    return {
      detailsAreVisible: false,
      friends: [
        {
          id: "zueiro",
          name: "Zueiro Lorenz",
          phone: "40028922",
          email: "zueiro@gmail.com",
        },
        {
          id: "peregrino",
          name: "Peregrino Rulez",
          phone: "87022514",
          email: "peregrino@gmail.com",
        },
        {
          id: "cegonha",
          name: "Cegonha Blindada",
          phone: "75463271",
          email: "cegonha@gmail.com",
        },
      ],
    };
  },
  computed: {},
  methods: {
    toggleDetails() {
      this.detailsAreVisible = !this.detailsAreVisible;
    },
  },
});

app.component('friend-contact', {
    data() {
        return {

        }
    },
    methods: {
        
    }
})

app.mount("#app");
