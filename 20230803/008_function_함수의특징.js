function add(a, b){
    let answer = a + b
}

let result = add(10, 20)

///////////////

function add(a, b){
    let answer = a + b
    return
}

let result = add(10, 20)

///////////////

function add(a, b){
    let answer = a + b
    return undefined
}

let result = add(10, 20)

// return 후엔 javascript는 더 이상 그 함수를 보지 않는다.
// 심지어 error가 나는 코드가 있어도 에러를 출력하지 않습니다.
// 이건 script언어의 특징이다.
function test(){
    console.log('hello')
    console.log('hello')
    console.log('hello')
    return
    console.log('hello')
    console.log('hello')
    console.log('hello')
}

//단락 평가에서도 마찬가지기에 보지 않는 경우에는 error를 출력하지 않는다

//////////////////////////어렵고 안중요함///////////////
//어디까지나 공부목적
function errorCode() {
    console.loghonjung('hello')
}

let value = true;
let result = true || errorCode()
// true가 출력됨, 만약 실행되었다면 뒤에 error를 출력해야되는 errorCode()는 실행이 안되었다는걸 볼수있다.

function test(){
    if(true) {
        console.log('1')
        return
    }
    console.log() // return 후에 선언되었기때문에 실행되지않는다
}

//함수의 이름은 결국 변수이기 때문에 argument 또는 return 값으로 전달가능
//닶은 "네" 입니다.

function add(a, b) {
    return a + b;
}

// 1. 함수를 아규먼트로 전달
// 아래와 같이 아규먼트로 전달된 함수를 '콜백함수'라고 부른다

function add(x, y) {
    return x + y
}

function addAndMultiply(x, y) {
    let sum = add(x, y) * add(x, y)
    return sum
}

addAndMultip0ly(1, 2, add);

// 2. 함수를 리턴값으로 전달 (스코프와 클로저를 배우고 나서 다시 배울 예정)
// 면접 질문에서도 스코프는 자주 물어봄
function one(x) {
    function two(y) {
        return x + y;
    }
    return two;
}

let result1 = one(10)
result(100)

function result(y) {
    return 10 + y;
}

result(100)