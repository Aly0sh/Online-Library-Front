<template>
    <div class="modal-container" v-show="show" @click.self="closeModal()">
        <img src="../assets/images/close-modal.png" alt="">
        <div class="modal-purchase">
            <h2 class="modal-title">Бронь</h2>
            <!-- <form>
                <input type="text" placeholder="Страна"> <br>
                <input type="text" placeholder="Город"> <br>
                <input type="text" placeholder="Адрес"> <br>
                <button>Забронировать</button>
            </form> -->
            <p>Ваш купон: jnakjnwda</p>
            <p>Скидка состовляет: 410</p>
            <p>Общая сумма: 2000</p>
        </div>
    </div>
</template>

<script>

export default{
    data(){
        return {
            show: false,

        }
    },
    methods: {
        closeModal(){
            this.show = false;
            document.body.style.overflow = "visible";
        }
    }
}
</script>