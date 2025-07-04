<h1><a src="https://ko.legacy.reactjs.org/">React</a></h1>

React는 JavaScript 라이브러리 중 하나이지만 React 생태계는 Router, Next.js, Rudux 등 굉장히 큼<br>

```
#CRA
npm init recat-app .
npx create-react-app .
yarn create react-app .

#Vite
npm create vite@latest (. -- --template react)/ npm install
```
<h4>Vite</h4>
<ul>
  <li>TypeScript/JavaScript(작은 프로젝트)</li>
  tsc 사용, 전통적/안정적 완전환 TS 제공 // 빌드 속도가 느림
  <li>Type Script/JavaScript + SWC(대규모 프로젝트)</li>
  빠른 컴파일 속도, 효율적 // 타입 검사 별도 필요
</ul>

<h3>js와 jsx</h3>
js, jsx는 혼용해서 사용이 가능함 보통 js는 로직 부분, jsx는 UI 부분으로 사용됨

<h3>컴포넌트</h3>
<h4>클래스형 컴포넌트</h4>
반환 : ReactNode<br>
<h4>함수형 컴포넌트</h4>
반환 : ReactElement - React.creageElement<br>

JSX.Element : any 타입의 props/type을 가진 React.createElement

<h3>useEffect와 useMemo</h3>
useEffect - 사이드 이펙트(데이터 가져오기, DOM 조작 등), 컴포넌트 사이드 이펙트를<br>
useMemo - 불필요한 연산 방지(복잡/비용이 큰 연산), 값을<br>

<h2>React - Router</h2>

```
npm install react-router-dom@6 // 6 -> 버전
```
<h3>useParams() - 경로 파라미터</h3>
=) /indxe/elden-ring<br>
경로 - /game/:slug<br>
반환 : {slug : "elden-ring"} => 객체{}

```js
//라우팅
<Route path="/index/:slug" element={<GameInfoPage />} />
//
const {slug} = useParams();
```

<h3>useSerachParams() - 쿼리 파라미터</h3>
=) /index?slug="elden-ring"<br>
반환 : [URLSearchParams, setSearchParams] => 배열 []


```js
//라우팅
<Route path="/index" element={<GameInfoPage />} /> //?slug 부분은 필요 x
//
const [searchParams] = useSearchParams(); //=> searchParams = URLSearchParams
const slug = searchParams.get("slug"); //=> URLSearchParams.get("slug") = "elden-ring"
```
