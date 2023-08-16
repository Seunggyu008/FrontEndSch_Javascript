//문제 1
const arr = [10, 20, 30, 10, 20, 30, 40, 10];

//문제 1.1
//a = accumulator = 누적값
//c = currentValue = 가산 값
//0 = initialValue = 초기 값, 없으면 error
let solution1 = arr.reduce((a, c) => a + c, 0) / arr.length; 
console.log(solution1)

//forEach 사용시
let solution2 = 0;

arr.forEach(v => {
    solution2 += v;
})
console.log(solution2 / arr.length);

//map 사용시
let solution3 = 0;
arr.map(v => {
    solution3 +=v;
})
console.log(solution3 / arr.length);


//문제 1.2
const newArr = [];
let avgArr = solution3 / arr.length;
arr.map(v => {
    newArr.push((v - avgArr) ** 2);
})

console.log(newArr);
//맞나?


const person = {
    name: '재현',
    age: 20,
    gender: 'male'
};

for(i = 0; i <= 3; i++) {
    console.log(`${Object.keys(person)} : ${Object.values(person)}`);
}
