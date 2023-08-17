// 블록 레벨 스코프
// for문이어도 마찬가지입니다.

/* if(true){ 
    let x = 10;
    const y = 10;
}
console.log(x, y)  */

//출력되지 않음

//밖에서 선언된 함수는 함수 내부에서도 접근 가능
let x = 100;
function xplus() {
    x = x + 10;
}

xplus();
console.log(x);

//함수가 종료된 다음에는 선언된 변수는 휘발된다
function xplus() {
    let a = 100;
    a = a + 10
}

xplus()
console.log(a) //error
//a는 함수 안에서 선언되었기때문에 밖에서 접근할수없다


//함수 안에 함수 
//a()는 b()에 접근할수있지만, a()밖에서 선언된 b()는 접근할수없다.
function a() {
    console.log('a 실행')
    function b() {
        console.log('b 실행')
    }
    b()
}

a()
b() //error