<h2>TypeScript</h2>
<ul>
      <li>js 상위집합</li>
      <li> js + 정적 타입 -> 안정성, 유지보수성</li>
      <li>변수 타입 - 컴파일 결정 -> 타입 오류 X</li>
</ul>
<h3>적용 하는 법</h3>

```
//기존 프로젝트 추가
npm install --save typescript @types/node @types/react @types/react-dom @types/jest

//CRA
npx create-react-app my-app --template typescript
```

<h3>예시</h3>

```ts
const [count, setCount] = useState<number>(0);<br>
//문자열
let name :string = 'John';
//배열
let arr :(string/number ...)[] = ["kim", "park"];
//객체( ? - 옵션)
let obj :{ name(?) : string } = { name : "kim" };
//유니온
let result :string | number = "Hello"; (OR | 사용)
//Type 설정
type SN = string | number
let result :SN = "Hello";
//함수
function add(x :number) :number{}
//튜플
type Arr = [string, numver]
//객체
type Member = {
      name :string,
      age :number,
      [key :string] : string
}
```

<ul>
      <li>제네릭 -> <T></li>
</ul>

tsc는 타입스크립트를 타입스크립트로 자비스크립트로 변환 -> Go 사용해서 10 빨라짐(7부터) - 대규모 프로젝트에서 좋음

<h2>TypeScript in React</h2>

```ts
// FC : Function Component
function App: React.FC<string>{
 	return (
  		<div></div>
  	)
}
```
~v18 - React.FC : props에 children 담겨있어 타입 설정 X<br>
v18~ - Generic 타입으로 변경 -> 타입 지정 필요

<h3>Type, Interface</h3>

```ts
interface(type) Identification {
  name : string;
  age: number;
  phoneNumber: number;
}

function App(props: Identification){
  return (
    <div>
      <h1>Hello React</h1>
    </div>
  );
}
```
type - 타입 정의, 조합 등 병합, extends 불가<br>
interface - 객체 정의 병합(동입 이름 여러번 선언), extends 가능 -> 재사용성, 확장성 ↑

```ts
// 확장, 병합
interface Person {
  name: string;
}

interface Employee extends Person {
  position: string;
}
==========================================
interface User {
    name: string;
}

interface User {
    age: number;
}

const user: User = {
    name: 'John',
    age: 30
};
```

```ts
intergace(tpye) User{
      name: string,
      age : number
};
// interface - 클래스 정의, Person 클래스는 User 인터페이스를 구현
class Person implements User {
    name: string;
    age: number;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }
}
// type - 변수 정의
const user :User = {
      name: "kim",
      age: 23
};
```

<h3>JSX.Element</h3>

```ts
unction App(): JSX.Element {
  return <div>Hello</div>;
}
```
타입 명시 - 컴포넌트 반환 값을 JSX 타입 지정<br>
React.FC < JSX.Element<br>



















