## Vue-Router
React-Router는 App에서 Route를 통해 컴포넌트, Vue-Router는 index에서 routes를 통해 객체로 하고 App에 router-view가 필수
```
npm install vue-router

// main.js
import router from "./router";

createApp(App).use(router).mount("#app");

// src/router/index.js(만들어야 됨)
import { createRouter, createWebHistory } from "vue-router";
import DemoPage from "../views/DemoPage.vue";
import LoginPage from "../views/LoginPage.vue";

// createWebHistory URL 표시 o, createMemoryHistory URL 표시 x, URL로 접근 x
const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/demo",
      component: DemoPage, // 공통 레이아웃땐 components 사용
    },
    {
      path: "/login",
      component: LoginPage,
    },
  ],
});

export default router;
```
```js
<router-link to=""></router-link>(<RouterLink ></RouterLink>)<br>
<router-view />(<RouterView />) - 라우팅 경로 컴포넌트 랜더링 자리
```
