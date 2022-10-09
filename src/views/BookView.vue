<template>
    <div class="book-wrapper">
        <img src="../assets/images/deffault-image.jpeg" alt="">
        <div class="book-content">
            <h1>Тарелка с карпинками</h1>
            <p>Описание: Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt, nulla doloremque omnis eligendi dolorum sequi. Saepe nostrum expedita, iste iure beatae eveniet sed repellat? Similique, aliquid nisi. Itaque, eius ad?</p>
            <div>
                <hr>
                <p>Филлиал: company</p>
                <p>Цена: 300 сом</p>
                <button class="cart-home-add">В корзину</button>
            </div>
            <div>
                <hr>
                <p>Филлиал: company</p>
                <p>Цена: 300 сом</p>
                <button class="cart-home-add">В корзину</button>
            </div>
            <div>
                <hr>
                <p>Филлиал: company</p>
                <p>Цена: 300 сом</p>
                <button class="cart-home-add">В корзину</button>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios';

export default{
    data() {
        return {
            
        }
    },
    mounted() {  
		console.log(this.$route.params.code);
        axios
            .get(this.baseUrl + "/books/filials/?code=" + this.$route.params.code)
            .then(response => {
                this.carts = response.data;
                console.log(response.data);
            })
            .catch(error => {
                console.log(error);
            });
    },
}
</script>