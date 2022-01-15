<template>
  <li>
    <h2>{{ friend.name }}</h2>
    <button>Show Details</button>
    <ul>
      <li><strong>Phone:</strong> {{ friend.phone }}</li>
      <li><strong>Email:</strong> {{ friend.email }}</li>
    </ul>
  </li>
</template>

<script>
export default {
  data() {
    return {
      detailsAreVisible: false,
      friend: [
        {
          id: "filipi",
          name: "Filipi",
          phone: "184151854",
          email: "filipi@gmail.com",
        },
        /* {
          id: "zueiro",
          name: "Zueiro",
          phone: "841554184",
          email: "zueiro@gmail.com"
        } */
      ],
    };
  },
  methods: {
      toggleDetails() {
          this.detailsAreVisible = !this.detailsAreVisible;
      }
  },
};
</script>
