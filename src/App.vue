<template>
  <nav class="firstNav">
    <div class="logo">
      <img src="./assets/images/logo.png" alt="" @click="$router.push('/')"/>
    </div>
    <ul class="links">
      <li>
        <router-link to="/" class="lexend link">ГЛАВНАЯ</router-link>
      </li>
      <li><a href="" class="lexend link">МАГАЗИНЫ</a></li>
      <li><a href="" class="lexend link">ЖАНРЫ</a></li>
    </ul>
    <ul class="icons">
      <li><img @click="$router.push('/cart')" src="./assets/images/cart-black.svg" alt=""></li>
      <li><img src="./assets/images/icon_geoloc.svg" alt=""></li>
      <li><img src="./assets/images/icon_login.svg" @click="$router.push('/login')" alt=""></li>
    </ul>
  </nav> 
  <nav :class="burger?'secondNav-100':'secondNav'">
    <div class="menu" @click="burger = !burger">
      <div :class="burger ? 'f-line-menu-active':'f-line-menu'"></div>
      <div :class="burger ? 's-line-menu-active':'s-line-menu'"></div>
      <div :class="burger ? 't-line-menu-active':'t-line-menu'"></div>
    </div>

    <div class="logo">
      <img src="./assets/images/logo.png" alt=""/>
    </div>

    <div :class="burger ? 'nav-cart-dis' : 'nav-cart'">
      <img @click="$router.push('/cart')" src="./assets/images/cart-black.svg" alt="">
    </div>
  </nav> 
  <router-view></router-view>
</template>

<script>

export default {
  name: 'App',
  data() {
    return{
      burger: false
    }
  }
}
</script>

<style lang="css" src="./assets/css/style.css"></style>
