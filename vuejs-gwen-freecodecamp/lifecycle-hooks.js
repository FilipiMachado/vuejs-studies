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
    },
    updated(){
        console.log('Updated')
    }
})

app.component('test-box', {
    template: `
        <div class="box"></div>
    `,
    created(){
        console.log("Created")
    },
    mounted() {
        console.log("Mounted")
    },
    unmounted() {
        console.log("Unmounted")
    }
})

app.mount('#first-app')