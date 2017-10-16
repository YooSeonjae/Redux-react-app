Redux

- Redux는 어플리케이션의 클라이언트쪽 state를 관리하기 위한 거대한 이벤트루프이다.
액션 = 이벤트
리듀서 = 이벤트에 대한 반응

Redux의 이해

- 리액트를 사용하는 프로그래머 입장에서는 누구나가 거쳐가는 바로 그 기술 Redux.

Redux의 동기

- Redux공식 문서(참조)에 의하면 리덕스는 클라이언트 앱의 복잡성을 제어하기 위한 하나의 state제어 수단이라고 한다(정확히는 방법론이 맞는것 같다.)

- Redux를 제안하고 개발한 Dan Abramov는 클라이언트앱의 복잡성을 증가시키는게 Mutation과 Asynchronicity라며 그 둘을 멘토스와 콜라와 같다고 한다.
Mutation과 Asynchronicity는 각각 존재할때에는 대단한 것임에 틀림없지만 같이 존재할때 크나큰 복잡성을 유도한다는 것이다.

- Redux는 Mutation, 즉 클라이언트의 종합적인 State를 관리하기 위한 아키텍쳐 방법론인 것이다.

Redux의 원리

- Redux의 원리는 생각보다 크게 어렵지 않다.

- 어플리케이션 전체에는 store라는 커다란 하나의 state가 존재하는데 이것이 어플리케이션의 state를 총괄한다.

- store의 state는 그 자체를 직접 변형할 수 없고, 오직 순수 함수인 리듀서로만 새로운 형태로 갈아치우는 것이 가능하다.

- 리듀서는 type과 payloads(꼭 속성이름이 이렇지 않아도 됨)를 속성으로 갖는 단순 객체인 action이벤트가 발생했을 때에만 작동하며
action이벤트를 발생시키는 방법은 dispatch라는 함수에 단순 객체인 action을 넣는것으로 가능하게 한다.

- dispatch(action) => 리듀서 작동 => store의 state변경 => 변경된 state가 state를 subscribe하고 있는 컴포넌트에 전달

redux의 장점
- application state의 변화가 예측가능하게 변한다는 점이다.

redux의 정체
-  redux는 state관리를 위한 거대한 event loop이다