<template>
  <li>
    <h2>{{ name }} {{ favoriteAreVisible === true ? '(Favorite)' : ''}}</h2>
    <button @click="toggleDetails">{{ detailsAreVisible ? 'Hide' : 'Show' }} Details</button>
    <button @click="toggleFavorite">{{ favoriteAreVisible ? 'Hide' : 'Show' }} Favorite</button>

    <ul v-if="detailsAreVisible">
      <li>
        <strong>Phone:</strong>
        {{ phoneNumber }}
      </li>
      <li>
        <strong>Email:</strong>
        {{ emailAddress }}
      </li>
    </ul>
  </li>
</template>

<script>
export default {
  props: {
    "name": String,
    "phoneNumber": Number,
    "emailAddress": String,
    "isFavorite": Boolean
  }
  ,
  data() {
    return {
      detailsAreVisible: false,
      friend: {
        id: "manuel",
        name: "Manuel Lorenz",
        phone: "0123 45678 90",
        email: "manuel@localhost.com",
      },
      favoriteAreVisible: this.isFavorite,
    };
  },
  methods: {
    toggleDetails() {
      this.detailsAreVisible = !this.detailsAreVisible;
    },
    toggleFavorite(){
      this.favoriteAreVisible = !this.favoriteAreVisible
    }
  }
};
</script>