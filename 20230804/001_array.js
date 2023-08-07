//중요! 실무에서 많이 쓰임
//push - 배열의 뒤에 값을 추가
//return value: undefined
//pop - 뒤에서 값을 꺼내고 반환(return)
//return value : 꺼낸 값

//unshift - 배열의 앞에 값을 추가한다
//return value : 배열의 길이
//shift - 앞에서 값을 꺼내고 반환
//return value: 꺼낸 값

//문제
//push, pop, unshift, shift를 이용하여 다음과 같은 배열을 만들어보세요
//입력값: [10, 20, 30, 40]
//출력값: [10, 100, 20, 30, 50]

let x = [10, 20, 30, 40];
x.pop(40);
x.push(50);
x.shift(10);
x.unshift(100);
x.unshift(10);

//arr.splice(start, deleteCount, item1, item2,...)
let arr = [10, 20, 30]
arr.splice(1, 0, 100) // 1번째에, 0개를 지우고, 100을 넣어라 (0개를 지우기 때문에 밀린다)

let arr = [10, 20, 30]
arr.splice(1, 1, 100, 200)// 1번째에, 1개를 지우고, 100, 200을 넣어라
arr.splice(1, [100, 200])// 1번째에, 1개를 지우고, [100, 200]을 넣어라

//////같이 풀 문제
//array는 const로 선언한다
let arr = p[10, 20, 30, 40]
let x = [1, 2, 3]
//만들고 싶은 값: [10, 1, 2, 3 20, 30, 40, 1, 2, 3, 100]

//방법 1
let arr = [10, 20, 30, 40]
let x = [1, 2, 3]
arr.splice(1, 0, ...x) //전개구문 (대괄호 하나를 지운다), 즉슨, [1, 2, 3]이 1, 2, 3으로 들어간다는 뜻
arr.splice(7, 0, ...x) 
arr.push(100)

//방법 2
let arr = [10, 20, 30, 40]
let x = [1, 2, 3]
arr.splice(1, 0, x[0], x[1], x[2])
//생략

//////
//splice에서 인자값을 히나만 넣으면, 그 인덱스 부터 끝까지 다 지운다
//splice에서 인자값을 두개만 넣으면, 두번재 인자값부터 끝까지 다 지운다
let arr = [10, 20, 30, 40]
arr.splice(1)
arr.splice(1, 2,) // 1번째부터 2개를 지워라 (삽입값은 없음)

//2. slice
//arr.slice(start, end)
//주의! 원본을 수정되지 않습니다!
//비교! splice는 원본을 수정합니다!
//javascript의 설계철학은 오류를 많이 안뽑는거지만 slice같은 경우 다른 언어 역시 오류를 잘 출력하지 않는다
let arr = [10, 20, 30, 40]
arr.slice(1, 3); //1번쨰부터 3번쨰 전까지 (2번째까지) 자른다.
arr.slice(1, 1000); // index에 없는 값도 오류가 생기지 않습니다!, splice도 마찬가지입니다
arr.slice(100, 10000) // index에 없는 값도 오류가 생기지 않습니다!, splice도 마찬가지입니다

//웹브라우저마다 javascript 엔진이 다르기 때문에 ECMA script를 따르기로 했지만 그래도 브라우저마다 다른 문법이 있다.
//가장 큰 예시가 sort이다.
//ecma script는 sort

