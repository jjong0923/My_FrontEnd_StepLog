<h1><a href="https://ko.vuejs.org/guide/introduction.html">Vue.js - 8080(Cli),5173(Vite)</a></h1>
UI 구축을 위한 JavaSrcipt 프레임워크<br>

- 선언적 랜더링(Declarative Rendering) - html을 template으로 확장, 선언적으로 작성
- 반응성(Reactivity) - 상태 변경 추적, DOM 효율적으로 자동 업데이트

SFC로 Vue 컴포넌트 작성<br>

컴포넌트 구성요소<br>
- template
- script
- style

```
// CLI
npm install -g @vue/cli

vue create first-app

npm run serve

git config --global --add safe.directory D:/Vue/new-project
git status
git add -A
git commit -m "initial commit"

// vite
npm create vue@latest / npm install

// vsc 플러그인
// vuter
```
```js
// 페이징 에러시 package.json 파일 수정 requireConfigFile 추가
"parserOptions": {
      "parser": "@babel/eslint-parser",
      "requireConfigFile": false
    }
"rules": {
      "no-unused-vars": "off",             // 사용하지 않는 변수
      "vue/no-unused-components": "off"    // 사용하지 않는 컴포넌트
    }
```

```js
============================================================================
<script src="https://unpkg.com/vue@3/dist/vue.global.js"></script>
============================================================================
<script type="module">
  import { createApp, ref } from 'https://unpkg.com/vue@3/dist/vue.esm-browser.js'
============================================================================
<script type="importmap">
  {
    "imports": {
      "vue": "https://unpkg.com/vue@3/dist/vue.esm-browser.js"
    }
  }
</script>
<script type="module">
  import { createApp, ref } from 'vue'
```
임포트 해놓고 안쓰면 안쓴다고 에러를 보내기 때문에 안쓰는 것은 임포트와 함께 다 지워야 함 겁나 깐깐함<br>

<h3>v-model</h3>
양방향 데이터 바인딩 예시

```js
// 입력값 변경되면 자동 업데이트/렌더링
// React에선 onChange 함수가 필요하지만 v-model을 사용하면 함수가 필요 없음
<template>
  <div>
    <input v-model="input" />
    {{ input }}
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      input: ""
    };
  },
};
</script>
```
<h3>v-on</h3>
이벤드 핸들링 ex) 클릭(:click), 호버(:mouseover/out), 키 입력(:keyup/down), 입력(:input)(?)

```js
<template>
  <button v-on:click="handleClick">Click Me</button>
  <!-- <button @click="handleClick">Click Me</button> -->
</template>

<script>
export default {
  methods: {
    handleClick() {
      console.log("Vue clicked!");
    }
  }
}
</script>
```
<h3>Props</h3>

```js
// App.vue
<template>
  <div>
    <HelloWorld :msg="msg" />
  </div>
</template>
<script>
import HelloWorld from "./components/HelloWorld.vue";
export default {
  name: "App",
  components: {
    HelloWorld,
  },
  data() {
    return {
      msg: "안녕하세요"
    };
  },
};
</script>

// HelloWorld.vue
<template>
  <div>
    {{ msg }}
  </div>
</template>
<script>
export default {
  name: "HelloWorld",
  props: {
    msg: String,
  },
};
</script>
```
