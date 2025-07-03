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

