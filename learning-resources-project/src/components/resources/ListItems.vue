<template>
  <li>
    <div>
      <header>
        <h3>{{ title }}</h3>
        <button>Delete</button>
      </header>
    </div>
    <p>{{ desc }}</p>
    <nav>
      <a :href="link">View Resource</a>
    </nav>
  </li>
</template>

<script>
export default {
  name: 'ListItems',
  props: {
   title: {
     type: String
   },
   desc: {
     type: String
   },
   link: {
     type: String
   },
  },
  data() {
    return {};
  },
};
</script>

<style scoped></style>
