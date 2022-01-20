const app = Vue.createApp({
    data(){
        return {
            isVisible: false,
        }
    },
    methods: {
        showBox(){
            this.isVisible = !this.isVisible
        }
    }
})

app.mount('#first-app')