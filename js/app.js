const app = Vue.createApp({
    data() {
        return {
            showBooks: true,
            title: 'The Final Empire',
            age: 20
        }
    },
    methods: {
        changeTitle() {
            this.title = 'aaaa'
        },
        addAge() {
            this.age++
        },
        minusAge() {
            this.age--
        },
        toggleHide() {
            this.showBooks = !this.showBooks
        }
    },
})
app.mount('#app')