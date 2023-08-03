//사칙연산시 null은 0의 취급을 받아 error를 주지는 않고 정상적으로 출력된다
//하지만!! 그렇다고해서 null이 0인것은 아니고, null == 0, null === 0시 false를 반환한다.

let value1; // undefined

// 존재하지만 값이나 자료형이 존재하지 않는 foo
var value2 = null;
console.log(value2); //null


// 참고삼아서만 알아주세요.
// null * 100이나 null + 100 이런 것도 한 번 해보세요!
// let 반점수 = [10, 20, 30, null, 40, 50]
// let 반평균 = 0
// for (const i of 반점수) {
//     console.log(i)
//     반평균 += i
// }

// 반평균


// let 반점수 = [10, 20, 30, undefined, 40, 50]
// let 반평균 = 0
// for (const i of 반점수) {
//     console.log(i)
//     반평균 += i
// }

// 반평균 // NaN