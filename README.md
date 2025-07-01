# FrontEnd_Note
* var - 재할당/재선언 O
* let - 재할당 O / 재선언 X
* const - 재할당/재선언 X 

추가할 것 들<br>
axios,fetch
<h2>React - Router</h2>
useParams() - 경로 파라미터<br>
ex) /indxe/elden-ring<br>
경로 - /game/:slug<br>
반환 : {slug : "elden-ring"} => 객체{}

```js
//라우팅
<Route path="/index/:slug" element={<GameInfoPage />} />
//
const {slug} = useParams();
```

useSerachParams() - 쿼리 파라미터<br>
ex) /index?slug="elden-ring"<br>
반환 : [URLSearchParams, setSearchParams] => 배열 []<br>


```js
//라우팅
<Route path="/index" element={<GameInfoPage />} />
//
const [searchParams] = useSearchParams(); //=> searchParams = URLSearchParams
const slug = searchParams.get("slug"); //=> URLSearchParams.get("slug") = "elden-ring"
```


스타일(css 파일, styled-component 등) 정리


CI/CD 파이프라인
Vite, Vue Query, Capacitor, scss<br>

flutter
React Native(모바일)
페이스북에서 개발한 크로스 플랫폼
js 코드가 React Native 브릿지를 통해 안드로이드/iOS API와 통신
브릿지 - 중간 다리 역할(카메라, GPS 등), View 기능 제어
네이티브 이벤트 발생 -> 데이터 수집(브릿지) -> js(로직) 이벤트 처리 -> 네이티브 메서드 호출 or UI 업데이트 -> 명령 처리 -> 업데이트
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
express, nest.js
<br>
ES5, ES6<br>
DOM 다루기
https://springfall.cc/article/2022-11/easy-promise-async-await
바닐라 JS, JQuery


<h3>Tools</h3>
Git Hub, Figma
