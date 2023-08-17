let s = new Set('abcdeeeeeeeee');
console.log(s); 
console.log(s.size);
//중복된 e는 출력되지 않는다

// Set에 값을 추가하기
//중복된 값을 넣을경우 에러가 발생하진 않지만 중복되는 값이 생략된다
s.add('f');
console.log(s);

// Set을 순환하기
for (let variable of s) {
  console.log(variable);
}

// 값이 배열인 경우
let ss = new Set('abcdeeeeeeeee'.split(''));
let ss = new Set('abcde,eeeee'.split(','));
console.log(ss);

// Set의 값을 제거하기
ss.delete('b');

// Set의 값을 확인하기
// boolean값으로 return
console.log(ss.has('a'));

// Set의 모든 값을 제거하기 
ss.clear()
console.log(ss);

let a = new Set('abc');
let b = new Set('cde');
// 교집합
let cro = [...a].filter(value => b.has(value));
// 합집합
let union = new Set([...a].concat(...b));
// 차집합
let dif = [...a].filter(x => !b.has(x));