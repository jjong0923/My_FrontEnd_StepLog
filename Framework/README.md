<h1><a href="https://ko.vuejs.org/guide/introduction.html">Vue.js - 5173</a></h1>
UI 구축을 위한 JavaSrcipt 프레임워크<br>

- 선언적 랜더링(Declarative Rendering) - html을 template으로 확장, 선언적으로 작성
- 반응성(Reactivity) - 상태 변경 추적, DOM 효율적으로 자동 업데이트

SFC로 Vue 컴포넌트 작성<br>

태그들<br>
- script
- template
- style

```
npm create vue@latest / npm install
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

<h1><a href="https://angularjs.org/">Angular(AngularJS) - 4200</a></h1>
구글에서 만든 JavaScript SPA 프레임워크, 웹/앱을 동시에 구현 할 수 있음<br>

- AngularJS - 구버전(버전1 JavaScript 기반)
- Angular - 신버전(버번2- TypeScript 기반)

특징<br>
- TS 기반 - 대규모 프로젝트에서 유지 보수/안정성
- ES6 문법
- SPA(라우팅 시스템)
- MVVM(Model-View-View Model) - 컴포넌트 기반, 양방향 데이터 바인딩(모델-뷰 자동 동기화 -> 즉시/자동 반영)

```
//Angular Cli 확장자

npm install -g @angular/cli

// ~v17
ng new first-app --no-standalone

// v17~, zone.js 라이브러리 - 변경 감지, 비동기 작업 감지
ng new first-app

ng serve (--open)
```
  
<h1><a href="https://nextjs.org/">Next.js</a></h1>
React 기반 서버사이드 렌더링(SSR) 프레임워크 - 서버측에서도 렌더링 -> 로딩 속도 개선, 검색 엔진 최적화(SEO)에 유리<br>
자동 코드 분할, 환경 변수, TypeScript 지원 -> 개발 생산성 ↑<br>

```
npx create-next-app@latest
or
yarn create-next-app
============================================================================
npx create-next-app@latest --typescript
or
yarn create-next-app -- typescript
```
