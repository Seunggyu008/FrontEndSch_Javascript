// filter
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const result = arr.filter(v => v % 2 === 0);

// filter는 return 값이 true인 것만 모아서 새로운 배열을 만듭니다.
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const result = arr.filter(v => {
    return true
})
result

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const result = arr.filter(v => {
    return false
})
result

//reduce
[10, 20, 30, 40, 50].reduce((a, c) => a + c,0); // 암기코드, 0을 안넣어두면 error를 출력한다.
//참고로 변수 이름은 상관없음, (a, c)가 아니라 다른거여도 됨
//forEach, map, filter, reduce등의 메서드도 마찬가지
[10, 20, 30, 40, 50].reduce((a, c) => a + c);
[10, 20, 30, 40, 50].reduce((a, c) => {
    console.log(a, c)
    return a + c;
})


// filter는 메서드 체이닝으로 많이 사용됩니다.

//join은 array안의 value를 선언된 문자열로 합칩니다.
let arr1 = ['hello', 'world', 'hojun']
arr1.join('') 



//reverse
[10, 20, 30].reverse() // [30, 20, 10]


