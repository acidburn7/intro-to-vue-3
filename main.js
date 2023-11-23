const app = Vue.createApp({
    data() {
        return {
            product: 'Socks',
            image: './assets/img/socks_green.jpg',
            inStock: false,
            inventory: 2,
            onSale: false,
        }
    }
})