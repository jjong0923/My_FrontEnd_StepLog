<h2><a href="https://styled-components.com/">Styled Components</a></h2>

```
npm install styled-components
```
```js
#prop 사용
const Box = styled.div`
  background-color: ${(props) => props.bgColor};
  width: 100px;
  height: 100px;
`;
const Circle = styled(Box)` // 확장
  border-radius: 50px;
`;

function App() {
  return (
    <Father>
      <Box bgColor="teal" />
      <Circle bgColor="tomato" />
      <Box as="a" href="/" /> // 태그만 변경
    </Father>
  );
}
```
<h2><a>Bootstrap</a></h2>
<p>오픈소스 CSS 라이브러리</p>

<h2><a href="https://tailwindcss.com/">Tailwind CSS</a></h2>
<p>유틸리티 우선의 CSS 프레임워크</p>
<p>모듈화, 디자인 일관성 유지, 유연성</p>
<ul>
    <li>CSS 파일이 커질 수록 로딩이 느려짐</li>
</ul>

<h4>설치 방법</h4>
v4부터 dist 폴더 생성

```
npm install -D tailwindcss@latest postcss autoprefixer

npx tailwindcss init -p
===========================================================
npm install tailwindcss @tailwindcss/cli


```

<h4>예시</h4>

```
<div className="w-12 h-10 text-white bg-gray-400"></div>
<div className="w-full h-10 bg-red-400 text-blue-200">text</div>
<div className="flex bg-slate-100 mt-3"></div>
```
<p>
    w : width,
    h : height,
    bg : background
    
</p>


