const object = { a: 1, b: 2,};
const array = [1, 2];

//객체 일반 할당
const a = object.a;
const b = object.b;

//객체 비구조화 할당
const {a, b} = object;

//배열 비구조화 할당
const [1, 2] = array;


console.log(a);
console.log(b);