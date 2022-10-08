<template>
    <div class="login-wrapper">
        <h2 class="lexend-light h-login">Войти</h2>
        <form>
            <input type="text" v-model="user.username" placeholder="Имя пользователя" class="login-input">
            <input type="password" v-model="user.password" placeholder="Пароль" class="login-input">
            <button type="button" class="login-button" @click="signin()">Войти</button>
            <div class="registration-block-center">
                <router-link to="/sign-up" class="sign-up-text">Регистрация</router-link>
            </div>
        </form>
    </div>
</template>

<script>
import axios from "axios";

export default {
    data() {
        return {
            user: {
                username: '',
                password: ''
            }
        }
    },
    methods: {
        signin() {
            console.log(this.user);
            axios
                .post("http://127.0.0.1:8000/login/", this.user)
                .then((resp) => {
                    if (resp.status == 200) {
                        // this.$store.commit("setCredentials", {
                        // email: resp.data.value.email,
                        // token: 'Bearer ' + resp.data.value.token,
                        // signInFlag: true,
                        // id: resp.data.value.userId,
                        // role: resp.data.value.role
                        // });
                        // this.$router.push("/");
                        // sessionStorage.setItem("email", resp.data.value.email);
                        // sessionStorage.setItem("token", 'Bearer ' + resp.data.value.token);
                        // sessionStorage.setItem("signInFlag", true);
                        // sessionStorage.setItem("id", resp.data.value.userId);
                        // sessionStorage.setItem("role", resp.data.value.role);  
                        this.$store.commit("setCredentials", {
                            token: "Bearer " + resp.data.access,
                            signInFlag: true,
                        });
                        sessionStorage.setItem("token", "Bearer " + resp.data.access);
                        this.$router.push("/");
                    }
                })
                .catch((error) => {
                    if (!error.response) {
                        this.$store.commit("setError", error);
                    } else if (error.response.data.details === undefined) {
                        this.$store.commit("setError", error);
                    } else {
                        this.signInErrorFlag = true;
                        this.signInErrorMessage = error.response.data.details;
                        console.log(error.response.data);
                    }
                });
                console.log(this.$store.getters.getToken);
            }
        },

};
</script>

<style lang="css" src="../assets/css/style.css"></style>
