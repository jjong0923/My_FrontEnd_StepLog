<h1>TypeScript</h1>
- js 상위집합
- js + 정적 타입 -> 안정성, 유지보수성
- 변수 타입 - 컴파일 결정 -> 타입 오류 X
ex) const [count, setCount] = useState<number>(0);
      let name: string = 'John';
- 제네릭 -> <T>
- 유니온 use |
ex) let result: string | number = identity("Hello"); (OR)
