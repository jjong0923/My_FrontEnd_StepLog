<div>
<h2>
 상태 관리란?
</h2>
 <p>
  애플리케이션 데이터를 효율적으로 관리<br>
 </p>
</div>
<div>
 <h3>Local State Management</h3>
 <p>
  useState, useReducer
 </p>
 <p>컴포넌트 내부에서 관리 -> 불필요한 랜더링 방지 - 소규모 애플리케이션</p>
 <p>단점 : prop drilling - 규모가 커지면 하위 컴포넌트로 prop 전달이 많아짐</p>

 <h3>Context API</h3>
 <p>
  prop을 사용하지 않고 데이터 공유(전역)
 </p>
 <p>단점 : 규모가 커지면 Context 또한 많아져 관리 어려움</p>
 <h4>사용 예시</h4>
 <p>테마/사용자/언어(지역) 데이터</p>
 <a href="https://react.dev/learn/scaling-up-with-reducer-and-context">자세히 보러 가기</a>
</div>
<div>
 <h3>Redux</h3>
 <p>주요 개념</p>
 <ul>
  <li>Store : 상태 보관</li>
  <li>Action : 이벤트 설명 객체</li>
  <li>Reducer : 액션에 따라 상태 변경 함수 </li>
  <li>Dispatch : 스토어에 전달</li>
 </ul>
 <p>FLux 아키텍처 사용으로 단방향 데이터 흐름 -> 데이터 변화 예측 쉬움</p>
 <p>javascript 전역 개발 라이브러리로 Vanilla JS, Angular, Vue 등 사용 가능</p>
 <p>단점 : 초기 설정 복잡함</p>
 <h3>Redux-toolkit</h3>
</div>
 Redux, Zustand, Context, Recoil
