const app = Vue.createApp({
    data() {
        return {
            product: 'Socks',
            image: './assets/img/socks_green.jpg',
            inStock: false,
            inventory: 2,
            onSale: false,
            details: ['50% cotton', '30% wool', '20% polyester'],
            variants: [
                { id: 2234, color: 'green' },
                { id: 2235, color: 'blue' }
              ]
        }
    }
})