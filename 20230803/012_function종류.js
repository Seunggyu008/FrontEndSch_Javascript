// 함수의 종류
// 화살표 함수에 다향한 예제(****)
// 읽어볼만한 문헌 : https://ko.javascript.info/arrow-functions-basics

// 1. 함수 선언문
function sum(x, y){
  return x + y;
}

// 2. 함수 표현식
// let의 특징을 따름
let sumXY = function(x, y){
  return x + y;
};
console.log(sum(10, 20));
console.log(sumXY(10, 20));

// 3.1 화살표 함수
// 전체적으로 봤을떄 코드가 짧아져 코드의 가독성이 좋아지는 효과를 보인다
// 3.1 return문만 있는경우
function sum(x, y){
  return x + y;
}

let sum = (x,y) => x + yd

// 3.2 함수의 기능 + return이 있는 경우
function sum(x, y){
  let z = x + y;
  console.log(z)
  return x;
}

let sum = (x, y) => {
  let z = x + y;
  console.log(z)
  return x;
}

// 3.3 인자가 하나인경우
function pow(x) {
  return x * x;
}

let pow = x => x * x
let pow = (x) => x * x


// 4. 즉시 실행 함수
//대부분 main함수로 만들어서 사용하는 경우가 많습니다.
(function () {
  console.log('즉시실행')
})
//즉시 실행함수를 사용하면 main을 다시 사용할 수 없게 할 수 있습니다.
//또한 전역변수 등을 사용하지 않게 할 수 있어요.

// 5. 재귀함수(중급자 될때까지 권하지 않습니다.)
// 반복문으로 만들 수 있으면 재귀로 표현이 가능하고
// 재귀로 표현이 가능하면 반복문으로 표현이 가능합니다.
function factorial(n) {
  if (n == 1) {
      return 1;
  }
  return n * factorial(n - 1);
}
factorial(5)
// 5! == 5 * 4 * 3 * 2 * 1

factorial(5) == 5 * factorial(4) == 5 * 24
factorial(4) == 4 * factorial(3) == 4 * 6
factorial(3) == 3 * factorial(2) == 3 * 2
factorial(2) == 2 * factorial(1) == 2 * 1
factorial(1) == 1

// 6. 지역변수 전역변수
let a = 10;
function test() {
  console.log(a)
}
test();

//scope-chaining
// three()에선 a가 선언되지 않았기에 위의 scope인 two()로 올라가고, two()에도 선언된 지역변수가 없으니 더 위 scope인 one()으로 올라가서 찾습니다.
// 자신의 공간에서 해당 변수가 없으면 상위 공간에서 찾고, 못 찾으면 error
// 찾으면 "읽을 수" 있지만
// "수정"은 불가능합니다!
let a = 10;
function one() {
  let a = 100; // 지역변수
  function two() {
    function three() {

    }
    three()
  }
  two()
}
one()


// 지역변수 끼리는 서로 간섭을 못합니다.
function one() { // 메모장
  let x = 10 // x는 라인 수
}

function two() { // 카메라
  let x = 100 // x는 조리개값
  console.log(x)
}
one()
two()

function test() {
  let x = 100;
}

function test() {
  //이렇게 하면 window에 등록이 되어 버립니다.
  //let이나 const, var 키워드를 꼭 써줘야한다.
  x = 100;
}


let a = 10; // 전역변수
function test() {
    let a = 100
    return a
}
test() // 100
console.log(a) // 10

let a = 10;
function test() {
    let a = 100
    function test2() {
        a = 1000
    }
    test2()
    console.log(a) // 1000
}
test()
console.log(a) // 10

//순수함수
function add(a, b, c) {
  return a + b + c
}
add(1, 2, 3)

//순수함수 x 권장되지않음
let c = 10;
function add(a, b, c) {
  return a + b + c
}
add(1, 2, 3)
