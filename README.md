# FrontEnd_Note
추가할 것 들<br>
<h2>Router</h2>
<p>useParams() - 경로 파라미터</p>
ex> /game/elden-ring<br>
경로 - /game/:slug<br>
반환 : {slug : "elden-ring"} => 객체{}

```
js
const {slug} = useParams();
```

<p>useSerachParams - 쿼리 파라미터</p>
ex> /game?slug="elden-ring"<br>
반환 : [URLSearchParams, setSearchParams] => 배열 []<br>


```
js
const [searchParams] = useSearchParams(); => searchParams = URLSearchParams
const slug = searchParams.get("slug"); => URLSearchParams.get("slug") = "elden-ring"
```




폴더(pages, components ...) 정리
스타일(css 파일, styled-component 등) 정리

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


==========================================
node.js
express, nest.js


<br>
<h3>Tools</h3>
Git Hub, Figma
