<template>
    <div class="wrapper">
        <h1 class="home-title">В продаже</h1>
        <div class="carts-home">
            <div class="cart-home" v-for="(cart, id) in carts" :key="id">
                <img :src="cart.album" alt="">
                <div class="content-cart">
                    <h2>{{ cart.title }}</h2>
                    <p>{{ cart.description.length < 100 ? cart.description : cart.description.substring(0, 100) + "..." }}</p>
                    <button class="cart-home-more" @click="bookPush(cart.code)">Подробнее</button>
                </div>
            </div>
        </div>
    </div>

</template>

<script>
import axios from 'axios';


export default {
    data() {
        return {
            baseUrl: "https://yngaily.herokuapp.com",
            carts: [],
            lorem: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi alias cumque aperiam in omnis provident deleniti quidem. Dicta, nulla facere fugiat ut magni ullam. Ullam veritatis magnam praesentium officia architecto?",

        }
    },
    mounted() {
        axios
            .get(this.baseUrl + "/books/")
            .then(response => {
                this.carts = response.data;
                console.log(response.data);
            })
            .catch(error => {
                console.log(error);
            });
    },
    methods: {
        bookPush(code) {
            this.$router.push("/book/" + code);
        }
    }
};
</script>