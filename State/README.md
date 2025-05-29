<div>
<h3>
 상태 관리란?
</h3>
 <p>
  애플리케이션 데이터를 효율적으로 관리<br>
 </p>
</div>
<div>
 <h4>Local State Management</h4>
 <p>
  useState, useReducer
 </p>
 <p>컴포넌트 내부에서 관리 -> 불필요한 랜더링 방지 - 소규모 애플리케이션</p>
 <p>단점 : prop drilling - 규모가 커지면 하위 컴포넌트로 prop 전달이 많아짐</p>

 <h4>Context API</h4>
 <p>
  prop을 사용하지 않고 데이터 공유(전역)
 </p>
 <p>단점 : 규모가 커지면 Context 또한 많아져 관리 어려움</p>
 <h5>사용 예시</h5>
 <p>테마/사용자/언어(지역) 데이터</p>
 <a href="https://react.dev/learn/scaling-up-with-reducer-and-context">자세히 보러 가기</a>
</div>
 Redux, Zustand, Context, Recoil
