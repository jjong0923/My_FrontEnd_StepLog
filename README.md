# FrontEnd_Note
블로그로 옮겨야겠다...

## Tools
Git Hub, Figma, GitHub Desktop, Git kraken

## ✅ vsc 플러그인
- Live Server

### 공통
- Prettier : 자동 정렬
- Material Icon Theme : 파일, 폴더 아이콘
- Image preview : 코드 내 이미지 미리보기
- HTML CSS Support : id/class 속성 자동 완성 in html
- HTML to CSS autocompletion : id/class 속성 자동 완성 in css
- html tag wrapper
- HTML END Tags Labels
- Auto Rename Tag : 태그 자동완성
- indent-rainbow : 들여쓰기 컬러라이즈
- colorize : css 컬러 코드 적용
- CSS Peek
- CSS Initial Value
- Font Awesome Auto-complete & Preview

### Style
- vscode-styled-components
- Tailwind CSS IntelliSense
- Headwind
-  
### Vue
- Vuter : 파일구조, 구문 강조, 자동완성, Linting(코드 스타일 검사)
- Vue(Official) : vue 파일 코드 하이라이팅


## CI/CD 파이프라인
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

## ✅ ES5, ES6
ES(ECMAScript)란?
<li>모든 브라우저에서 동일하게 동작하지 않는 크로스 브라이징 이슈를 해결하기 위해 JavaScript를 표준화 한 것</li>

### 차이점
- 변수 선언
  - ES5 - var
  - ES6 - var + let + const
  
- 화살표 함수
  ```js
  // ES5
  var func = function(arg1, arg2) {console.log("ES5")}
  // ES6
  let func = (arg1, arg2) => {console.log("ES6")}
  ```
  
- 템플릿 리터럴
  ```js
  // Es5
  console.log("저의 이름은" + name + "이고, 나이는 " + age +"입니다.")
  // ES6
  console.log(`저의 이름은 ${name}이고, 나이는 ${age}살 입니다.`)
  ```
- 파라미터




### var, let, const
- var - 재할당/재선언 O
- let - 재할당 O / 재선언 X(권장)
- const - 재할당/재선언 X(권장)

## ✅ 프로젝트 파일 용도
- components - 재사용 가능한 컴포넌트 하위 폴더 추가 가능
- public - 이미지(index.html 직접 사용, 컴파일시 필요 X) 등 정적 파일
- assets - 이미지 or 폰트(컴포넌트 내부에서 사용하는)
- hooks - 커스텀 훅
- pages - 라우팅 적용 페이지 컴포넌트
- styles - CSS 파일
- api(service) - api 관련 로직, 인증
- utils - 정규표현식 패턴, 공통 함수 등 유틸 파일
- contexts/store - Context API 관련 파일/Redux
- constants - 공통 사용 상수 정의 파일
- config


## DOM(Dcoument Object Model)
- HTML 문서를 객체화 한 것<br>

### 계층 구조
<img src="./images/DOM.png" style="width : 800px">

# 추가할 것들
## Axios
Node.js와 브라우저를 위한 Promise API HTTP 통신 외부 라이브러리, promise 객체 반환
https://velog.io/@kcj_dev96/axios-%EC%9D%B8%EC%8A%A4%ED%84%B4%EC%8A%A4-%EC%83%9D%EC%84%B1%EA%B3%BC-%ED%97%A4%EB%8D%94-%EC%84%A4%EC%A0%95
```
npm install axios
```

장점
- 다양한 기능(JSON/문자열자동변환)과 브라우저 호환성이 뛰어남

옵션
<ul>
 <li>baseURL - 공통 URL</li>
 <li>params - 쿼리스트링(key값)</li>
 <li>methon - 요청방식</li>
 <li>url - 요청 경로</li>
 <li>data - 요청 본문 데이터</li>
 <li>headers - HTTP 헤더 설정(인증)</li>
 <li>timeout - timeout 설정</li>
</ul>

```js
// 예시
// 인스턴스 방식 - 재사용성, 유지보수 용이
const api = axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: API_KEY,
  },
});

export const fetchGameInfo = async (slug) => {
  const res = await api.get(`/games/${slug}`);
  return res.data;
};

// 직접 사용 방식 - 간단한 요청
export const fetchGameInfo = (slug) => {
  return axios({
    method: "get",
    baseURL: "https://api.rawg.io/api",
    url: `/games/${slug}`,
  });
};
```

## Fetch
ES6 이후 Promise 기반 JavaScript 내장 라이브러리, JavaScript API<br>

단점
- 지원되지 않는 브라우저 존재(IE11)
- 네트워크 에러 발생 시 timeout을 계속해서 기다려야 됨
- 변환 과정 필요

```js
// 예시
const BASE_URL = "https://jsonplaceholder.typicode.com";

export const getPost = async (id) => {
  const res = await fetch(`${BASE_URL}/posts/${id}`);
  if (!res.ok) throw new Error("데이터 불러오기 실패");
  return res.json(); //함수 외부에서 에러 처리
};

// await 사용 할 때 함수 내부에서 에러 처리
export const fetchData = async () => {
  try {
    const res = await fetch("https://api.example.com/posts");

    if (!res.ok) throw new Error("서버 에러");

    const data = await res.json();
    return data;
  } catch (err) {
    console.error("Fetch 실패:", err);
    throw err;
  }
};
```
## <a href="https://swr.vercel.app/ko">SWR(Stale While Revalidate)</a>
hook 형태 SWR 라이브러리 in React<br>
SWR 내부 캐시 데이터를 확인 후 있으면 가져오고 없으면 업데이트<br>
자동 캐싱/재요청, 로딩/에러 관리<br>

> ## When?
> - 리스트/상세 페이지에서 자동 요청
> - SSR or Next.js 환경
> - 자주 보는 데이터(공지사항, 유저정보 등)

```
npm install swr

yarn add swr
```

```js
import useSWR from 'swr'

const fetcher = (url) => fetch(url).then((res) => res.json());
// const fetcher = (url) => axios.get(url).then(res => res.data);

const { data, error, isLoading } = useSWR(
    "https://jsonplaceholder.typicode.com/posts",
    fetcher
  );

  if (isLoading) return <p>로딩 중...</p>;
  if (error) return <p>에러 발생!</p>;
=================================================================
function Profile() {
  const { data, error, isLoading } = useSWR('/api/user', fetcher)
 
  if (error) return <div>failed to load</div>
  if (isLoading) return <div>loading...</div>
  return <div>hello {data.name}!</div>
}
```

## React Query


Vite, Vue Query, Capacitor, scss<br>

flutter<br>
## React Native(모바일)
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

https://springfall.cc/article/2022-11/easy-promise-async-await
바닐라 JS, JQuery


<br>협업도구
<br>Asana, Swagger, Docker
