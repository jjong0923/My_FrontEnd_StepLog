<h2>TypeScript</h2>
<ul>
      <li>js 상위집합</li>
      <li> js + 정적 타입 -> 안정성, 유지보수성</li>
      <li>변수 타입 - 컴파일 결정 -> 타입 오류 X</li>
</ul>

```
//기존 프로젝트 추가
npm install --save typescript @types/node @types/react @types/react-dom @types/jest

//CRA
npx create-react-app my-app --template typescript
```


```
ex) const [count, setCount] = useState<number>(0);<br>
let name: string = 'John';
```

<ul>
      <li>제네릭 -> <T></li>
      <li>유니온 use |</li>
</ul>
            
```
ex) let result: string | number = identity("Hello"); (OR)
```
