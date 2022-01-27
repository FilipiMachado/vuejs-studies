<template>
  <li>
    <h2>{{ name }} {{ friendIsFavorite === "1" ? '(Favorite)' :  ''}}</h2>
    <button v-on:click="toggleFavorite">Toggle Favorite</button>
    <button v-on:click="toggleDetails">{{ detailsAreVisible ? 'Hide' : 'Show' }} Details</button>
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
    name: {
      type: String
    },
    phoneNumber: {
      type: String
    },
    emailAddress: {
      type: String
    },
    isFavorite: {
      type: String
    }
  },
  /* [
    'name',
    'phoneNumber',
    'emailAddress'
  ], */
  name: 'FriendContact',
  data() {
    return {
      detailsAreVisible: false,
      friend: {
        id: "manuel",
        name: "Manuel Lorenz",
        phone: "0123 45678 90",
        email: "manuel@localhost.com",
      },
      friendIsFavorite: this.isFavorite,
    };
  },
  methods: {
    toggleDetails() {
      this.detailsAreVisible = !this.detailsAreVisible;
    },
    toggleFavorite(){
      if(this.friendIsFavorite === '1') {
        this.friendIsFavorite = '0'
      } else {
        this.friendIsFavorite = '1'
      }
    }
  }
};
</script>