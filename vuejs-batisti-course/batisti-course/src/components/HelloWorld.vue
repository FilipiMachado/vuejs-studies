<template>
  <div class="hello">
    <form>
      <input v-model="input_name" placeholder="Digite o seu nome" type="text">
      <input type="submit" value="Enviar" @click.prevent="submitForm">
    </form>
    <p>Meu nome é {{ name }} e tenho {{ age }} anos</p>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {},
  data() {
    return {
      name: 'Fil',
      age: 35,
      input_name: "",
    }
  },
  methods: {
    submitForm() {
      if (this.input_name === '') {
        alert('Você não digitou nada jovem!')
      } else {
        console.log(this.input_name)
      }
    },
  },
}
</script>

<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
