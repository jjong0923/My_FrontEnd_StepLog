# <a href="https://ko.vuejs.org/guide/introduction.html">Vue.js - 8080(Cli),5173(Vite)</a>
UI 구축을 위한 JavaSrcipt 프레임워크
- 선언적 랜더링(Declarative Rendering) - html을 template으로 확장, 선언적으로 작성
- 반응성(Reactivity) - 상태 변경 추적, DOM 효율적으로 자동 업데이트
SFC로 Vue 컴포넌트 작성

## 컴포넌트 구성요소
> - template
> - script
> - style
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
뭐였는지 기억이 안남...
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
임포트 해놓고 안쓰면 안쓴다고 에러를 보내기 때문에 안쓰는 것은 임포트와 함께 다 지워야 함 겁나 깐깐함

## v-model
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

## v-on
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

## Props
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

## emit
자식 -> 부모 이벤트 전달
```js
// App.vue
<template>
  <div>
    <Emit @Click-child-button="alertMsg(msg)" />
  </div>
</template>
<script>
export default {
  name: "App",
  components: {
    Emit,
  },
  methods: {
    alertMsg(msg) {
      console.log(msg);
    },
  },
};
</script>

// Emit.vue
<template>
  <div>
    <button @click="clickButton">버튼</button>
  </div>
</template>
<script>
export default {
  name: "Emit",
  emits: ["clickChildButton"],
  methods: {
    clickButton() {
      this.$emit("clickChildButton", "자식 emit 이벤트 발생)
    },
  },
};
</script>
```

## v-bind
: - v-bind 축약으로 value, style, class 등에도 쓰임
```js
<input type="text" placeholder="Email" /> // 정적, 텍스트
====================================================
data() {
  return {
    Email: "이메일을 입력하세요"
  }
}
<input type="text" :placeholder="Email" /> // 동적, 컴포넌트 data, props, computed에 정의된 변수
```
v-model 없이 실시간 감지할 때 @input 이벤트 핸들러 함수 사용

## computed/methods/watch
- computed(useMemo(react)) : 데이터 변화(데이터 의존)에 따른 계산된 값 (반응형 UI?), 캐싱 - in template
- methods : 이벤트 함수(클릭, 이벤트 처리 등) - int event
- watch(useEffect(react)) : 특정 데이터 변화 감지 비동기 작업, 로직 ex) API - in logic
```js
data() {
      return{
            prince : 0
};
},
watch: {
      price(newVal, oldVal) {} // data, props, computed에 있는 애들이여야 함, newVal,oldVal 생략 가능
}
```

## v-if
```js
<span v-if="!isPasswordCorrect && passwordConfirm">비밀번호가 일치하지 않습니다.</span> // isPasswordCorrect가 false일때 출력
```
## @blur
```js
@blur="hanldeBlur" 포커스 아웃되면 함수 실행
```
