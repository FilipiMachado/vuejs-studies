const app = Vue.createApp({
    data(){
        return {
            product: "Socks",
            image: "./assets/images/socks_blue.jpg",
            inStock: false,
            details: ['50% cotton', '30% wool', '20% polyester'],
            variants: [
                { id: 2234, color: 'Green', image: "./assets/images/socks_green.jpg"},
                { id: 2235, color: 'Blue', image: "./assets/images/socks_blue.jpg"}
            ],
            sizes: [
                {id: 1, size: 'P'},
                {id: 2, size: 'M'},
                {id: 3, size: 'G'}
            ],
            cart: 0
        }
    },
    methods: {
        addToCart(){
            this.cart += 1
        },
        updateImage(variantImage){
            this.image = variantImage
        }
    },
})

app.mount('#app')