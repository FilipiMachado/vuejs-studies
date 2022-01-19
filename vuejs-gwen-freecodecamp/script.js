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
            <custom-input type="email" v-bind:label="emailLabel"/>
            <custom-input type="password" v-bind:label="passwordLabel"/>
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
            <input type="text" />
        </label>
    `,
    props: [
        'label'
    ],
    data() {
        return {}
    },
    methods: {},
})

app.mount("#first-app")