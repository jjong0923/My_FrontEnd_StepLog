<h1><a src="https://www.typescriptlang.org/docs/">TypeScript</a></h1>

- js + 정적 타입 -> 안정성, 유지보수성
- 변수 타입 - 컴파일 결정 -> 타입 오류 X

<h3>적용 하는 법</h3>

```
//기존 프로젝트 추가
npm install --save typescript @types/node @types/react @types/react-dom @types/jest

//CRA
npx create-react-app my-app --template typescript

//vite npm crate vite@latest my-app -- template react-ts
```

<h3>예시</h3>

```ts
const [count, setCount] = useState<number>(0);
//문자열
const name :string = 'John';

//배열
const arr :(string/number ...)[] = ["kim", "park"];
const arr :Array<string> = ["lim", "han"];


//유니온
const result :string | number = "Hello"; (OR | 사용)

//Type 설정
type SN = string | number
const result :SN = "Hello";

//함수
function add(x :number) :number{}

//튜플
type Arr = [string, numver]

// 객체 만들기
// 리터럴 선언(? - optional)
const obj :{ name?: string } = { name : "kim" };

const user = {
  name: "Jongmin",
  age: 25,
};

//클래스 사용
class User {
  constructor(public name: string, public age: number) {}
  greet() {
    console.log(`Hello, ${this.name}`);
  }
}
const user = new User("kim",25);

// interface/type
interface(type) Member = {
      name :string,
      age :number,
      [key :string] : string
}
// 제네릭  = <T>
```
리터럴 : 일회성, 간단한 데이터<br>
클래스 : 상태/동작 정의, 객체지향 - 로직/상태 관리, 재사용<br>
type : 타입 정의, 조합 등 병합, extends 불가<br>
interface : 객체 정의 병합(동입 이름 여러번 선언), extends 가능 -> 재사용성, 확장성 ↑, with 클래스 - 재사용, 타입 안정성

> [!TIP]
> 로직/상태 관리 - 클래스
> 재사용/상속 - 클래스, interface
> 안정성 - inferface/type


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
==v18 - React.FC : props에 children 담겨있어 타입 설정 X<br>
v18== - Generic 타입으로 변경 -> 타입 지정 필요

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


<h3>JSX.Element</h3>

```ts
function App(): JSX.Element {
  return <div>Hello</div>;
}
```
타입 명시 - 컴포넌트 반환 값을 JSX 타입 지정<br>
React.FC < JSX.Element<br>



















