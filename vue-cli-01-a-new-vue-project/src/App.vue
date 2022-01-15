<template>
    <section>
        <h2>My Friends</h2>
        <ul>
            <li>{{ friends[0] }}</li>
            <li>{{ friends[1] }}</li>
        </ul>
    </section>
</template>

<script>
export default {
  data() {
    return {
      friends: [
        {
          id: "filipi",
          name: "Filipi",
        },
        {
          id: "zueiro",
          name: "Zueiro",
        },
      ],
    };
  },
};
</script>
