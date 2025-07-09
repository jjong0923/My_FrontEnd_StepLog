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
npm install -D tailwindcss@latest postcss autoprefixer // npm install tailwindcss @tailwindcss/cli

npx tailwindcss init -p가 안되니깐 tailwind.config.js, postcss.config.js를 만들어야 됨
===================================
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}"
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
===================================
module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
}
===================================
근데 module is not defined 떠서 해결하려면 .eslintrc.js 파일을 수정해야 되는데 없음 그래서 설치 해야 됨
근데 eslint.config.js가 이미 있음 같이 쓰면 안 됨 개같은 경우를 봤나

// .eslintrc.js 파일 설치
npm install -D eslint

npx eslint --init
=======
√ What do you want to lint? · javascript
√ How would you like to use ESLint? · problems
√ What type of modules does your project use? · esm
√ Which framework does your project use? · react
√ Does your project use TypeScript? · no / yes
√ Where does your code run? · browser
The config that you've selected requires the following dependencies:

eslint, @eslint/js, globals, eslint-plugin-react
√ Would you like to install them now? · No / Yes
√ Which package manager do you want to use? · npm
=======
하다가 찾아 냈다
npm install -D tailwindcss@3.3.2 postcss@8 autoprefixer@10

npx tailwindcss init -p
드디어 된다

tailwind.config.js
================
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}", // React 컴포넌트 경로 포함
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
=======or=========
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}", // React 컴포넌트 경로 포함
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
================

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


