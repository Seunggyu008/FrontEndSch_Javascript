// https://ko.javascript.info/nullish-coalescing-operator
// 스펙에 추가된 지 얼마 안 된 문법입니다. 구식 브라우저는 폴리필이(최신 문법을 구식 부라우저에서도 사용할 수 있도록 해주는 것) 필요합니다.

/* let firstName = null;
let lastName = null;
let nickName = 'licat'; */

console.log(firstName ?? nickName);
console.log(firstName ?? lastName ?? nickName);

/* let firstName = null;
let lastName = null;
let nickName = 'licat';
 */
console.log(firstName ?? nickName)
console.log(firstName ?? lastName ?? nickName)
console.log(firstName || nickName)

let a = null;
let b = 10;
let c = null; 

console.log(a ?? b ?? c)

let height = 0;
console.log(height ?? 100) // 0이 null인가요? 아니니까 0을 출력합니다. nullish 입장에서는 0도 value입니다
console.log(height || 100) // 0을 만났을 떄 뒤를 봐야 하나요?

let height1;
console.log(height1 ?? 'world') // ''이 null인가요? 아니니까 ''을 출력합니다. nullish 입장에서는 ''도 value입니다
console.log(height1 || 'hello') // 

//nullish 문제 1
let username;
let nickname;

console.log(username || nickname || 'guest');
// username - undefined  nickname - undefined 선언 후 값을 설정 안하면 undefined로 출력됨
// 'guest'가 출력됨

//nullish 문제 2
let username = ' ';
let nickname = ' ';

console.log(username || nickname || "guest");


//nullish 문제 3
let username = ' ';
let nickname = ' ';
console.log(username ?? nickname ?? 'guest')

//nullish 문제 4
let username;
let nickname;
console.log(username ?? username ?? 'guest')
