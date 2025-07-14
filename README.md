# FrontEnd_Note
<h2>Tools</h2>
Git Hub, Figma

<h3>CI/CD 파이프라인</h3>

- CI : Continuous Integration. 지속적 통합 - 자동 빌드/테스트, 병합(작은 단위로) -> 병합 충돌 예방, 이슈 해결
- CD : Continuous Delivery/Deployment(수동/자동), 지속적 제공/배포

단계
- 소스 코드 관리(Git 푸시) -> 빌드 -> 테스트 -> 배포

도구
- Jenkins - 다양한 플로그인, 대규모 프로젝트, 별도 서버 필요
- Travis CI - 깃 헙 연동, 초기 설정 간편
- GitHub Actions
- CircleCI
- ...


<h3>var, let, const</h3>
<ul>
 <li>var - 재할당/재선언 O</li>
 <li>let - 재할당 O / 재선언 X</li>
 <li>const - 재할당/재선언 X </li>
</ul>

<h3>프로젝트 파일 용도</h3>
<ul>
 <li>components - 재사용 가능한 컴포넌트 하위 폴더 추가 가능</li>
 <li>public - 이미지(index.html 직접 사용, 컴파일시 필요 X)</li>
 <li>assets - 이미지 or 폰트(컴포넌트 내부에서 사용하는)</li>
 <li>hooks - 커스텀 훅</li>
 <li>pages - 라우팅 적용 페이지 컴포넌트</li>
 <li>styles - CSS 파일</li>
 <li>api(service) - api 관련 로직, 인증</li>
 <li>utils - 정규표현식 패턴, 공통 함수 등 유틸 파일</li>
 <li>contexts/store - Context API 관련 파일/Redux</li>
 <li>constants - 공통 사용 상수 정의 파일</li>
 <li>config</li>
</ul>

추가할 것 들<br>
axios,fetch

Vite, Vue Query, Capacitor, scss<br>

flutter<br>
React Native(모바일)<br>
페이스북에서 개발한 크로스 플랫폼<br>
js 코드가 React Native 브릿지를 통해 안드로이드/iOS API와 통신<br>
브릿지 - 중간 다리 역할(카메라, GPS 등), View 기능 제어<br>
네이티브 이벤트 발생 -> 데이터 수집(브릿지) -> js(로직) 이벤트 처리 -> 네이티브 메서드 호출 or UI 업데이트 -> 명령 처리 -> 업데이트<br>

장점
- 배포 비용 절감 js 영역 한정
- Fast Refresh
- 대규모 오픈소스, 개발 용이

단점
- Android/iOS 지식 필요
- 라이브러리 버그 이슈
- 브릿지 사용으로 성능 하락
- 잦은 업데이트

RESTful API 비동기 데이터 처리
REST API
Library
 GraphQL
시각화
Three.js, Chart.js

firebase
==========================================
node.js
express.js, nest.js
<br>
ES5, ES6<br>
DOM 다루기
https://springfall.cc/article/2022-11/easy-promise-async-await
바닐라 JS, JQuery

<br>SWR(Stale While Revalidate)<br>
hook 형태 SWR 라이브러리 in React<br>

```
npm install swr

yarn add swr
```



React Query
<br>협업도구
<br>Asana, Swagger, Docker
