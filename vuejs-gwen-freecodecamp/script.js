const app = Vue.createApp({
    data() {
        return {
            greeting: "Welcome to Vue!",
            isVisible: false,
            isVisible2: false,
        }
    },
    methods: {
        showBox(){
            this.isVisible = !this.isVisible
        },
        greet(greeting){
            console.log(greeting)
        }
    }
})
app.component("login-form", {
    template: `
        <form v-on:submit.prevent="handleSubmit">
            <h1>{{ title }}</h1>
            <custom-input v-model="email" v-bind:modelValue="email" v-bind:label="emailLabel"/>
            <custom-input  v-model="password" v-bind:modelValue="password" v-bind:label="passwordLabel"/>
            <button id="submit-button">Submit</button>
        </form>
    `,
    components: [
        'custom-input'
    ],
    data() {
        return {
            title: "Login Form",
            email: "",
            password: "",
            emailLabel: "Email",
            passwordLabel: "Password",
        }
    },
    methods: {
        handleSubmit(){
            console.log(this.email, this.password);
            this.email = ""
            this.password = ""
        }
    },
})
app.component("custom-input", {
    template: `
        <label>
            {{ label }}
            <input type="text" v-model="inputValue"/>
        </label>
    `,
    props: [
        'label',
        'modelValue'
    ],
    computed: {
        inputValue: {
            get() {
                return this.modelValue
            },
            set(value){
                //console.log(value)
                this.$emit('update:modelValue', value)
            }
        }
    },
    /* data() {
        return {
            inputValue: "",
        }
    }, */
})

app.mount("#first-app")