<template>
    <div class="wrapper">
        <h1 class="home-title">В продаже</h1>
        <div class="carts-home">
            <div class="cart-home">
                <img src="../assets/images/deffault-image.jpeg" alt="">
                <div class="content-cart">
                    <h2>Тарелка крапинка</h2>
                    <button class="cart-home-more">Подробнее</button>
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
            carts: [],

        }
    },
    mounted() {
        axios
      .get("http://127.0.0.1:8000")
      .then(response => {(this.carts = response.data);
      console.log(response.data)})
      .catch(error => {
        console.log(error);
      });
    }
};
</script>