## ✅ CSS Module</h1>
CSS 사용 시 class 이름을 고유한 값으로 자동 생성, 정적 스타일 정의<br>
적용 방법 : 파일명.moudle.css 생성 후 import

#### When?
- 기존 스타일 유지하면서 컴포넌트화
- Tailwind, Styled-Components가 과할때
- CSS 범위 충돌

```js
// App.jsx
import styles from "./App.module.css";
...
<h1 className={styles.title}>Hello</h1>
<div className={`${styles.container1} ${styles.container2}`}>

//App.module.css
.title{
  font-size : 18px;
}

```

장점
- 클래스명 충돌(전역 오염 방지) X
- 컴포넌트 단위로 관리
- React 구조와 잘 맞음

단점
- 재사용 및 컴포넌트화 부족
- 조건부 스타일은 유틸 추가 필요


## ✅ <a href="https://styled-components.com/">Styled-Components</a>
CSS in JS<br>
런타임에 스타일 생성<br>

#### When?

- 스타일을 컴포넌트 단위로 관리
- 동적 스타일이 많을 때
- 디자인 시스템, 테마 기반 프로젝트 ???

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
장점
- props 기반 동적 스타일링, 컴포넌트화

단점
- 런타임 오버헤드
- 대규모 프로젝트에서 성능 이슈 가능성

### module.css와 Styled-Components
둘 다 컴포넌트 단위로 스타일을 관리 할 수 있지만 동적으로 스타일을 적용할 땐 Styled-Components가 더 유리함<br>
상태 기반으로 스타일 변경이 많을 땐 Styled-Components, 그 왼 moudle.css

## <a>Bootstrap</a>
오픈소스 CSS 라이브러리


