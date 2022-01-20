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
            <custom-input 
                v-for="(input, i) in inputs"
                v-bind:key="i"
                v-model="input.value" 
                v-bind:label="input.label"
                v-bind:type="input.type"
                />
            <button id="submit-button">Submit</button>
        </form>
    `,
    components: [
        'custom-input'
    ],
    data() {
        return {
            title: "Login Form",
            inputs: [
                {
                    label: 'Email',
                    value: '',
                    type: 'email'
                },
                {
                    label: 'Password',
                    value: '',
                    type: 'password'
                }
            ],
        }
    },
    methods: {
        handleSubmit(){
            console.log(this.inputs[0].value, this.inputs[1].value);
            this.email = ""
            this.password = ""
        }
    },
})
app.component("custom-input", {
    template: `
        <label>
            {{ label }}
            <input v-bind:type="type" v-model="inputValue"/>
        </label>
    `,
    props: [
        'label',
        'type',
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
        /* data() {
            return {
                inputValue: "",
            }
        }, */
    },
})

app.mount("#first-app")