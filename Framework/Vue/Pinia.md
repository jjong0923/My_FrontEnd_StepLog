# <a src="https://pinia.vuejs.kr/">Pinia</a>
전역 상태 관리 라이브러리
- Store : 상태 보관/변경 관리하는 객체
- State : Store 내부 데이터
- Getter(computed)
- Action : 상태 변경, 비동기 작업
```js
npm install pinia

// main.vue
import { createPinia } from "pinia";

const app = createApp(App);
const pinia = createPinia;
app.use(pinia);
app.use(router);
app.mount("#app");
```
```js
// Store 로직
import { defineStore } from "pinia";

export const useFruitStore = defineStore("fruit", {
  state: () => ({
    fruitList: [
      { id: 1, name: "Apple" },
      { id: 2, name: "Banana" },
      { id: 3, name: "Orange" },
      { id: 4, name: "Data" },
      { id: 5, name: "Berry" },
    ],
  }),
  getters: {
    getFruitListLength: (state) => state.fruitList.length,
    getFruitByNameWithA: (state) =>
      state.fruitList.filter((item) => item.name.includes("a")),
  },
  actions: {
    removeFirtsItem() {
      this.fruitList.shift();
    },
    removeLastItem() {
      this.fruitList.pop();
    },
  },
});

// 가져오기
<template>
  <div>
    <ul>
      <li v-for="item in fruits.fruitList" :key="item.id">
        {{ item.id }} - {{ item.name }}
      </li>
    </ul>
  </div>
</template>


<script setup> // export default 못 사용함
import { useFruitStore } from "../store/fruit";

const fruitStore = useFruitStore();
</script>
===================================================================
<script>
import { useFruitStore } from "../store/fruit";

export default {
  name: "DemoPage",
  data() {
    return {
      fruits: null,
    };
  },
  created() {
    this.fruits = useFruitStore();
  },
};
</script>

<style></style>
```
