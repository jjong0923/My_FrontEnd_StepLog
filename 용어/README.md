## ✅ 단일 페이지 애플리케이션(SPA - Single Page Application)
서버에서 데이터를 비동기로 받아와 동적으로 렌더링 - 클라이언트 사이드 렌더링(CSR - Client Side Rendering)<br>
Ajax 요청을 통해 부분 렌더링<br>
화면 렌더링을 로컬 PC에서 진행, 첫 페이지 로딩 느림<br>
다수의 페이지를 마치 하나의 페이지처럼 처리 -> 사용자 몰입도 ↑

- 필요한 부분만 업데이트 -> 빠른 로딩 속도 & 반응
- 체류시간 증가 -> 사용자 만족도 & 검색 엔진 순위 영향 <br>왜????
- 데이터 비동기 처리 -> 웹/앱 서비스 구현 가능
- 트래픽 감소 -> 비동기, 부분 업데이트 동적 요소(시각화) 웹/앱 구현에 유용 => 사용자 상호작용&실시간 화면 갱신

ex) Gamail, Facebook, Netfilx<br>
by React, Vue.js, Angular.js + Router || 상태 관리 : Redux, Vux || API : Ajax API - axios

## ✅ 멀티 페이지 애플리케이션(MPA - Multiple Page Application)
요청시 서버에서 렌더링 후 클라이언트로 전송, 페이지 마다 생성 - 서버 사이드 렌더링(SSR - Server Side Rendering)<br>
첫 페이지 로딩 빠름<br>
검색 엔진 최적회(SEO)에 유리

## ✅ 검색 엔진 최적화(SEO - Serach Engine Optimization)
검색 엔진에 친화적인 사이트 구축하여 자연 검색 결과를 통해 트래픽의 양과 질을 극대화<br>
=> 사용자에게 유용한 양질의 콘텐츠 제공 -> 여러 관련 키워드로 검색 결과 페이지 노출로 사이트의 온라인 가시성을 개선하는 마케팅 작업<br>
검색 엔진의 역할 : 사용자 질문 의도, 니즈에 가까운 답 제공

### ✅ 검색엔진 결과 페이지(SERP - Seacrh Engine Result Page)
- 광고 검색 결과(Paid Search Result) - 광고성, 상단에 노출되는 링크
- 자연 검색 결과(Organic Search Result) - 비광고성
=> 광고 검색 결과보다 자연 검색 결과를 더 많이 클릭하게 됨

## ✅ 정적 사이트 생성(SSG - Static Site Generation)
요청이 없어도 미리 렌더링함

## SFC - Single File Component

## SWC(Speed Web Compiler)
- 컴파일러와 번들러 역할, JavaScript 코드를 트랜스파일 or TypeScript 컴파일 하는 개발 도구<br>
  트랜스파일 -> ES6 이상 최신 문법을 ES5 이하로 변환
- 빠른 속도, Rust의 멀티스레드 처리 능력
  - 타입 검사 X, 코드 변환

## 클로저(Closure)
함수가 생성 될 당시 외부 변수(스코프)를 기억하는 함수

```js
// count는 inner 함수 안에 살아있음 -> 1, 2, 3
function outer() {
  let count = 0; // 외부 변수

  function inner() {
    count += 1;
    console.log(count);
  }

  return inner;
}

const fn = outer(); // outer() 실행됨 → inner 함수가 반환됨
fn(); // 1
fn(); // 2
fn(); // 3
```

## 모노레포(MonoRepo)
Monolithic Repositories, 하나의 레파지토리에 여러 개의 프로젝트 == Multi-repo, PolyRepo<br>

장점
- 중첩되는 모듈 하나만 설치

단점
- 의존성 충돌
  - 특정 버전의 모듈 사용할 경우 다른 버전 모듈과 충돌
- 긴 초기 프로젝트 설정 시간

