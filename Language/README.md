<h2>TypeScript</h2>
<div>
      <ul>
            <li>js 상위집합</li>
            <li> js + 정적 타입 -> 안정성, 유지보수성</li>
            <li>변수 타입 - 컴파일 결정 -> 타입 오류 X</li>
      </ul>
      <p>
            ex) const [count, setCount] = useState<number>(0);<br>
            let name: string = 'John';
      </p>
      <ul>
            <li>제네릭 -> <T></li>
            <li>유니온 use |</li>
      </ul>
      <p>
            ex) let result: string | number = identity("Hello"); (OR)
      </p>
</div>
