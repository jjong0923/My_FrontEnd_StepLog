<div>
<h1>
 상태 관리란?
</h1>
 <p>
  애플리케이션 데이터를 효율적으로 관리<br>
 </p>
</div>
<div>
 <h2>Local State Management</h2>

 <h3>useState, useReducer</h3>
 <p>컴포넌트 내부에서 관리 -> 불필요한 랜더링 방지 - 소규모 애플리케이션</p>
 <p>단점 : prop drilling - 규모가 커지면 하위 컴포넌트로 prop 전달이 많아짐</p>
</div>

<div>
 <h2>Global State Management</h2>
 
 <h3><a href="https://react.dev/learn/scaling-up-with-reducer-and-context">Context API</a></h3>
 <p>
  prop을 사용하지 않고 데이터 공유(전역)
 </p>
 <p>단점 : 규모가 커지면 Context 또한 많아져 관리 어려움</p>
  <h4>사용 예시</h4>
 <ul>
  <li>테마/사용자/언어(지역) 데이터</li>
 </ul>
 
 <h3><a href="https://ko.redux.js.org/introduction/getting-started">Redux</a></h3>
 <p>주요 개념</p>
 <ul>
  <li>Store : 상태 보관</li>
  <li>Action : 이벤트 설명 객체</li>
  <li>Reducer : 액션에 따라 상태 변경 함수 </li>
  <li>Dispatch : 스토어에 전달</li>
 </ul>
 <p>FLux 아키텍처 사용으로 단방향 데이터 흐름 -> 데이터 변화 예측 쉬움</p>
 <ul>
  <li>Flux 아키텍처 : 액션 -> 디스패쳐 -> 스토어 -> 뷰, 한 방향으로 데이터가 흘러감</li>
 </ul>
 <p>javascript 전역 개발 라이브러리로 Vanilla JS, Angular, Vue 등 사용 가능</p>
 <p>단점 : 초기 설정 복잡함</p>
 
 <h3>Redux-toolkit(RTK)</h3>
 <p>Redux를 간단하게 만드는 API 제공</p>

 <h3><a href="https://recoiljs.org/ko/">Recoil</a></h3>
 <p>Facebook에서 개발한 React 전용 전역 상태 관리 라이브러리, Atomic(원자) 단위로 상태 관리 -> 유연하고 재사용성 높음</p>
 <ul>
  <li>Atoms : 상태 최소 단위, 업데이트, 구독 가능</li>
  <li>Selectors : 파생 상태 계산 함수, atoms or selector 입력 받아 파생 값 반환</li>
 </ul>
 <p>▶ 비동기 상태 관리가 쉽고 선택적 상태 구독을 통해 성능 최적화 가능</p>
 <p>Next.js와 많이 사용됨</p>
 
 
 <h3><a href="https://zustand-demo.pmnd.rs/">Zustand</a></h3>
 <p>작은 크기와 단순한 함수 기반 API 제공하는 전역 상태 관리 라이브러리</p>
 <p>최소한의 리랜더링과 최적화 제공</p>
</div>

<div>
 <h2>Server State Management</h2>
 
 <h3>React Query</h3>
</div>
