<template>
    <div class="sign-up-wrapper">
        <h2 class="lexend-light h-login">Регистрация для пользователя</h2>
        <form>
            <input type="text" v-model="user.username" placeholder="Имя пользователя" class="sign-up-input" required>
            <input type="email" v-model="user.email" placeholder="Email адрес" class="sign-up-input" required>
            <input type="text" v-model="user.company_name"  placeholder="Название компании" class="sign-up-input" required>
            <input type="tel" v-model="user.phone_number" name="phone-number" placeholder="Номер телефона" class="sign-up-input" required>
            <input type="password" v-model="user.password" name="password" placeholder="Пароль" class="sign-up-input" required>
            <input type="password" v-model="user.password2" placeholder="Повторите пароль" class="sign-up-input" required>
            <button type="button" class="sign-up-button" @click="signup()">Зарегистрироваться</button>
        </form>
    </div>
    <div class="sign-up-wrapper">
        <h2 class="lexend-light h-login">Регистрация для продавца</h2>
        <form>
            <input type="text" v-model="user2.username" placeholder="Имя пользователя" class="sign-up-input" required>
            <input type="email" v-model="user2.email" placeholder="Email адрес" class="sign-up-input" required>
            <input type="tel" v-model="user2.phone_number" placeholder="Номер телефона" class="sign-up-input" required>
            <input type="password" v-model="user2.password" placeholder="Пароль" class="sign-up-input" required>
            <input type="password" v-model="user2.password2" placeholder="Повторите пароль" class="sign-up-input" required>
            <button type="button" @click="signup2()" class="sign-up-button">Зарегистрироваться</button>
        </form>
    </div>
</template>

<script>
import axios from "axios";

export default {
    data() {
        return {
            signUpUrl: 'http://127.0.0.1:8000/api/auth/register/',
            user: {
                username: '',
                company_name: '',
                phone_number: '',
                email: '',
                password: '',
                password2: '',
            },
            user2: {
                username: '',
                phone_number: '',
                email: '',
                password: '',
                password2: '',
            }
        }
    },
    methods: {
        signup() {
            axios
                .post("http://127.0.0.1:8000/api/auth/register/", this.user)
                .then((resp) => {
                    console.log(resp)
                    if (resp.status == 200) {
                        this.data = 'auth';
                        this.signin(this.user);
                }
                console.log(this.$store.state);
                })
                .catch((error) => {
                    console.log(error.response);
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
            },
        signup2() {
            axios
                .post("http://127.0.0.1:8000/api/cust/register/", this.user2)
                .then((resp) => {
                    console.log(resp)
                    if (resp.status == 200) {
                        this.data = 'auth';
                        this.signin(this.user2);
                }
                console.log(this.$store.state);
                })
                .catch((error) => {
                    console.log(error.response);
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
            },
            
        signin(user) {
            axios
                .post("http://127.0.0.1:8000/login/", user)
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
    }
};
</script>

<style lang="css" src="../assets/css/style.css"></style>
