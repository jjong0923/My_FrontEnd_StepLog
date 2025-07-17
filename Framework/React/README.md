<h1><a src="https://ko.legacy.reactjs.org/">React - 3000(CRA),5173(Vite)</a></h1>

React는 JavaScript 라이브러리 중 하나이지만 React 생태계는 Router, Next.js, Rudux 등 굉장히 큼<br>

```
// CRA
npm init recat-app .
npx create-react-app .
yarn create react-app .

// Vite
npm create vite@latest (. -- --template react) / npm install
```
<h3>Vite</h3>
<ul>
  <li>TypeScript/JavaScript(작은 프로젝트)</li>
  tsc 사용, 전통적/안정적 완전환 TS 제공 - 빌드 속도가 느림
  <li>Type Script/JavaScript + SWC(대규모 프로젝트)</li>
  빠른 컴파일 속도, 효율적 - 타입 검사 별도 필요
</ul>

<h3>js와 jsx</h3>
js, jsx는 혼용해서 사용이 가능함 보통 js는 로직 부분, jsx는 UI 부분으로 사용됨<br>
JSX.Element : any 타입의 props/type을 가진 React.createElement

<h3>컴포넌트</h3>
<h4>클래스형 컴포넌트</h4>

```js
class App extends Component {
  render() {
    return (
      <div>
        <h1>React</h1>
      </div>
    );
  }
}
// 반환 : ReactNode
```
<h4>함수형 컴포넌트</h4>

```js
function App() {
  return (
    <div>
      <h1>React</h1>
    </div>
  );
}
// 반환 : ReactElement - React.creageElement
```

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

<h2>최적화</h2>
연산, 함수, 컴포넌트(복잡/무거운)<br>
- 기능 구현(프로젝트 완성) 후

<h3>useEffect와 useMemo</h3>
useEffect - 사이드 이펙트(데이터 가져오기, DOM 조작 등), 컴포넌트 사이드 이펙트를<br>
useMemo - 불필요한 연산 방지(복잡/비용이 큰 연산), 값을<br>

useEffect, useMemo, useCallback -> (() => {},[])

1. useMemo - 값 메모이제이션
2. React.memo - memo()
3. useCallback - 함수 선언 메모이제이션
4. props 객체 변형 X
* 원본 객체 수정 X(불변성 유지) - 다른 참조 주소로 메모이제이션 X(자식 컴포넌트) 
5. 인덱스(배열)를 key로 사용 X - 필터링, 정렬 삭제 등 있을 땐 가능 하지만 일관성을 위해 사용 X
6. useState 함수형 업데이트
  
```js
const [count, setCount] = useState(0);

// 일반적 - 직접 참조, 오래된(stale) 값 사용
// 오래된 값 - 과거의 값이 클로저에 남아 있는 상태, 비동기 함수/콜백 함수에서 다른 값으로 작동
setCount(count + 1);

//함수형 업데이트(function update)
setCount(prevCount => prevCount + 1);

// useCallback
const increment = useCallback(() => {
  setCount(prev => prev + 1); //setCount(count + 1)
}, []); //[count]
의존성 제거 -> 함수 재생성 방지 - setCount(count + 1), [count] => setCount(prev => prev + 1)
```
7. onChange 최적화
* lodash
```
npm install lodash // npm install --save-dev @types/lodash
```

```js
const [text, setText] = useState("");

const sendQuery = (query: string) => {
    // 실제 API 호출 로직
    console.log("검색어:", query);
  };

  // ① 입력이 멈춘 후 400ms 지나면 sendQuery 호출
  const delayedSearch = useCallback(
    debounce((q: string) => sendQuery(q), 400), [] // 한 번만 생성
  );

  const handleChange = (event) => {
    setText(event.target.value);             // 즉시 입력 반영
    delayedSearch(event.target.value);       // 지연된 검색 실행
  };

  return (
    <input
      type="text"
      value={text}
      onChange={handleChange}
      placeholder="검색어 입력"
    />
  );
```
```ts
const [text, setText] = useState("");

const sendQuery = (query: string) => {
    // 실제 API 호출 로직
    console.log("검색어:", query);
  };

  // ① 입력이 멈춘 후 400ms 지나면 sendQuery 호출
  const delayedSearch = useCallback(
    debounce((q: string) => sendQuery(q), 400), [] // 한 번만 생성
  );

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setText(event.target.value);             // 즉시 입력 반영
    delayedSearch(event.target.value);       // 지연된 검색 실행
  };

  return (
    <input
      type="text"
      value={text}
      onChange={handleChange}
      placeholder="검색어 입력"
    />
  );
```


