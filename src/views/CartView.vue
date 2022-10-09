<template>
    <div class="cart-page-wrapper">
        <section class="content-section">
            <h2 class="section-header">Корзина</h2>
            <div class="cart-row">
                <span class="cart-item cart-header cart-column">Книга</span>
                <span class="cart-quantity cart-header cart-column">Филлиал</span>
                <span class="cart-quantity cart-header cart-column">Цена</span>
            </div>
            <div class="cart-items">
                <div class="cart-row">
                    <div class="cart-item cart-column">
                        <img class="cart-item-image" src="../assets/images/deffault-image.jpeg" width="100" height="100">
                        <span class="cart-item-title">Книга</span>
                    </div>
                    <span class="cart-quantity cart-column">Филлиал</span>
                    <span class="cart-quantity cart-column">Цена</span>
                </div>
            </div>
            <div class="cart-min">
                <div class="cart-row-min">
                    <div>
                        <img src="../assets/images/deffault-image.jpeg">
                    </div>
                    <div class="cart-row-min-content">
                        <h3>Книга</h3>
                        <p>Филлиал</p>
                        <p>Цена</p>
                    </div>
                </div>
                <hr>
            </div>
            <div class="cart-total">
                <strong class="cart-total-title">Итого</strong>
                <span class="cart-total-price">0 сом</span>
            </div>
            <div class="btn-div">
                <button class="btn-purchase" type="button" @click="openModal()">Бронь</button>
            </div>
        </section>
    </div>
    <ModalPurchase ref="modal"/>
</template>

<script>
import ModalPurchase from '@/components/ModalPurchase.vue';


export default{
    components: { ModalPurchase },
    methods: {
        openModal(){
            this.$refs.modal.show = true;
            document.body.style.overflow = "hidden";
        }
    }
}
</script>