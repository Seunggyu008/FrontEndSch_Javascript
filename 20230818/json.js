
const json = '{"result":true, "count":42}';
const obj = JSON.parse(json);
console.log(obj);

const json2 = '[1, 2, 3]';
const obj2 = JSON.parse(json);
console.log(obj);

const json3 = '[1, 2, [1, 2, 3]]';
const obj3 = JSON.parse(json);
console.log(obj);

const obj4 = { "result": true, "count": 42 }
const json4 = JSON.stringify(obj);

// JSON을 이용한 깊은 복사
// 깊은 복사란 데이터 자체를 다 복사하는걸 의미한다.
// 하지만 Javascript는 deep copy가 쉽지는 않다.
// 앑은 복사는 데이터 자체를 복사하는 것이 아닌 주소만 복사하는것
// l 객체를 문자열화 했다가 다시 객체로 변환하기 때문에 새로운 객체를 생성하는것과 동일합니다. 하지만 함수는 제대로 복사가 불가능하다는 단점이 있습니다. 
// 제대로된 깊은 복사를 위해서는 structuredClone 메소드를 사용해야합니다.
let l = [10, 20, 30];
let a = JSON.parse(JSON.stringify(l));
a[0] = 1000;

console.log(l);

// Ajax 통신을 통해 슈퍼히어로 Json 데이터를 받아봅시다!

const obj5 = {...obj3};
objec3.one = 10;

const obj6 = {oneL1, two: {three:3}};
obj6;
const obj7 = {...obj6};

obj6.two.three = 10;


