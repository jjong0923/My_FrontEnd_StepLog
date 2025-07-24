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
