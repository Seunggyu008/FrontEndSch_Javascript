var x;
console.log(x);
console.log(y);
console.log(z);

x = 1;
let y = 2;
const z = 3;

//무언가를 선언하면 무조건 호이스팅이 일어난다
//위 예시에서 var x에 값이 할당되기 전에 console.log를 했지만 x = 1이라고 정상적으로 출력된다
//이것은 전역 스코프에서 스코프 호이스팅이 일어나 나중에 선언된 값이 할당되어 에러를 뿜지 않는것이다.

//let이랑 const로 선언된 변수의 경우,
//Uncaught ReferencError: cannot access 'y' before initialization
//y가 있다는걸 호이스팅을 통해서 자바스크립트 엔진이 알고있지만 TDZ에 들어가 있기에 접근이 불가능하게 막아논 것이다.
//let과 const로 선언된 변수와 상수는 Temporal Dead Zone(TDZ)에 배치되는데, 
//선언에 대한 초기화가 실행된 이후에 TDZ에서 제거되 접근이 가능해진다.

//호이스팅으로 인한 문제를 방지하기위해 let과 const를 사용하자