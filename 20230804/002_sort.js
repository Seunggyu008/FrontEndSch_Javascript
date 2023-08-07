//무결한 코드
jsonData.sort((a, b) => (a[key] > b[key] ? -1 : (a[key] < b[key] ? 1 : 0)))

const avengers = ['아이언맨', '스파이더맨', '헐크', '토르'];
console.log(avengers.sort());


let data = ['a', 'z', 'b', 'e'];
data.sort();

//사전식 정렬이어서 아래와 같은 값은 정렬이 되지 않습니다
let data = [1, 11, 2, 111, 22];
data.sort()

//실무 DB로 가지고 있으면 좋을 코드
jsonData.sort((a, b) => (a[key] > b[key] ? -1 : (a[key] < b[key] ? 1 : 0))) // [111, 22, 11, 2, 1] 오름차순
jsonData.sort((a, b) => (a[key] < b[key] ? -1 : (a[key] < b[key] ? 1 : 0))) // [1, 2, 11, 22, 111] 내림차순

// (a, b) => (a - b)가 콜백함수입니다.
// a - b 값이 0보다 작은 경우 a를 b보다 낮은 색인으로 정렬합니다. 즉, a가 먼저옵니다.
// a - b 값이 0을 반환하면 a와 b를 서로에 대해 변경하지 않고 모든 다른 요소에 대해 정렬합니다.
// a - b 값이 0보다 큰 경우, b를 a보다 낮은 인덱스로 소트합니다. 즉, b가 먼저옵니다.

// 원리
let test = [13, 9, 10, 2];
test.sort((a, b) => {
    console.log(a, b)
})
// 출력해보면 a, b의 값이 순차적으로 들어갈 것 같지만 그렇지 않습니다.
// 9 13
// 10 9
// 2 10

let test = [13, 9, 10, 2];
test.sort((a, b) => {
    console.log(a, b)
    console.log(a - b) // 0보다 작은 경우 a를 b보다 낮은 색인으로 정렬합니다. 즉, a가 먼저옵니다.
});

let test = [13, 9, 10, 2];
test.sort((a, b) => {
    return a - b; // 작은 값이 앞으로 간다 => 오름차순