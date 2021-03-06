const app = Vue.createApp({
  data() {
    return {
      friends: [
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
  methods: {},
});

app.component("friend-contact", {
  template: `
  <li>
      <h2>{{ friend.name }}</h2>
      <button v-on:click="toggleDetails()">{{ detailsAreVisible ? "Hide" : "Show" }} Details</button>
      <ul v-if="detailsAreVisible">
        <li><strong>Phone:</strong> {{ friend.phone }}</li>
        <li><strong>Email:</strong> {{ friend.email }}</li>
      </ul>
  </li>
  `,
  data() {
    return {
      detailsAreVisible: false,
      friend: {
        id: "zueiro",
        name: "Zueiro Lorenz",
        phone: "40028922",
        email: "zueiro@gmail.com",
      },
    };
  },
  methods: {
    toggleDetails() {
      this.detailsAreVisible = !this.detailsAreVisible;
    },
  },
});

app.mount("#app");
