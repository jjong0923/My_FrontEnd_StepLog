<h2><a href="https://ko.vuejs.org/guide/introduction.html">Vue.js</a></h2>
<p>UI 구축을 위한 JavaSrcipt 프레임워크</p>
<ul>
  <li>선언적 랜더링(Declarative Rendering) - html을 template으로 확장, 선언적으로 작성</li>
  <li>반응성(Reactivity) - 상태 변경 추적, DOM 효율적으로 자동 업데이트</li>
</ul>
<p>SFC로 Vue 컴포넌트 작성</p>
<ul>
  <label>태그들
  <li>script</li>
  <li>template</li>
  <li>style</li>
</ul>

```
npm create vue@latest
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

<h2><a href="https://angularjs.org/">Angular.js</a></h2>
<p>구글에서 만든 JavaScript 프레임워크, SPA 문제해결을 위해 개발</p>
  <ul>
    <li>js 코드량↓</li>
    <li>양방향 데이터 바인딩 가능</li>
    <li>개발 영역 명확히 분리</li>
  </ul>
  <a href="https://choonsdevlog.tistory.com/entry/AngularCLI">Angular.js 시작하러 가기</a>
  
<h2><a href="https://nextjs.org/">Next.js</a></h2>
<p>React 기반 서버사이드 렌더링(SSR) 프레임워크 - 서버측에서도 렌더링 -> 로딩 속도 개선, 검색 엔진 최적화(SEO)에 유리</p>
<p>자동 코드 분할, 환경 변수, TypeScript 지원 -> 개발 생산성 ↑</p>

```
npx create-next-app@latest or yarn create-next-app
============================================================================
npx create-next-app@latest --typescript or yarn create-next-app -- typescript
```
