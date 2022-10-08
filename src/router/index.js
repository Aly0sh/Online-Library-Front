import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import LoginView from "../views/LoginView.vue";
import SignUpView from "../views/SignUpView.vue";

const routes = [
  {
    path: '/',
    name: "home",
    component: HomeView,
  },
  {
    path: '/login',
    name: "login",
    component: LoginView,
  },
  {
    path: '/sign-up',
    name: "sign-up",
    component: SignUpView,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
