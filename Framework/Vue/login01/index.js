import { createRouter, createWebHistory } from "vue-router";
import LoginPage from "../views/LoginPage.vue";
import SignUpPage from "../views/SignUpPage.vue";
import DemoPage from "../views/DemoPage.vue";
import MainPage from "../views/MainPage.vue";

// createWebHistory URL 표시 o, createMemoryHistory URL 표시 x
const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      component: LoginPage,
    },
    {
      path: "/demo",
      component: DemoPage,
    },
    {
      path: "/signup",
      component: SignUpPage,
    },
    {
      path: "/main",
      component: MainPage,
    },
  ],
});

export default router;
