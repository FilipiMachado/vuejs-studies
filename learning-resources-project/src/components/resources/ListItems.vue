<template>
  <li>
    <div>
      <header>
        <h3>{{ title }}</h3>
        <button>Delete</button>
      </header>
    <p>{{ desc }}</p>
    <nav>
      <a :href="link">View Resource</a>
    </nav>
    </div>
  </li>
</template>

<script>
export default {
  name: 'ListItems',
  components: {
    BaseCard
  },
  props: {
    title: {
      type: String,
    },
    desc: {
      type: String,
    },
    link: {
      type: String,
    },
  },
  data() {
    return {};
  },
};
</script>

<style scoped>
li {
  margin: auto;
  max-width: 40rem;
}

header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

h3 {
  font-size: 1.25rem;
  margin: 0.5rem 0;
}

p {
  margin: 0.5rem 0;
}

a {
  text-decoration: none;
  color: #ce5c00;
}

a:hover,
a:active {
  color: #c89300;
}
</style>
