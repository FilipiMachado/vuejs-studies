<template>
  <li>
    <h2>{{ name }} {{ isFavorite ? '(Favorite)' :  ''}}</h2>
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
    <button v-on:click="deleteFriend">Delete</button>
  </li>
</template>

<script>
export default {
  props: {
    id: String,
    name: String,
    phoneNumber: String,
    emailAddress: String,
    isFavorite: Boolean
  },
  /* [
    'name',
    'phoneNumber',
    'emailAddress'
  ], */
  name: 'FriendContact',
  emits: ['toggle-favorite','delete-friend'],
  data() {
    return {
      detailsAreVisible: false,
      friendIsFavorite: this.isFavorite,
    };
  },
  methods: {
    toggleDetails() {
      this.detailsAreVisible = !this.detailsAreVisible;
    },
    toggleFavorite(){
      this.$emit('toggle-favorite', this.id)
    },
    deleteFriend(){
      this.$emit('delete-friend', this.id)
    }
  }
};
</script>