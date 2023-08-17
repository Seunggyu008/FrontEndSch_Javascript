// Map의 순환(일반적인 for문을 사용하려면 아래처럼 전개해야 합니다.)
// let m = [...data]
//variable의 자료형이 배열이고, 배열끼리는 destructuring이 가능하다
//0이면 키값을 가리키고, 1일경우 값을 가리킨다.
for (const variable of m) {
    console.log(`m을 순회하고 있습니다. ${variable[0]}`)
    console.log(`m을 순회하고 있습니다. ${variable[1]}`)
}

for (const [key, val] of m) {
        console.log(`${key}: ${val}`);
}

// Map의 값에 접근
//iterator를 통해서 반환한다
console.log(m.keys()); // 키값만 반환
console.log(m.values()); //value값만 반환


// 인덱스를 가지는 자료형을 맵핑하기
let temp = new Map([[1, 10],
[2, 20],
[3, 30],
[4, 40]]);

console.log(temp);

// object 자료형을 맵으로 변환하기
let temp2 = new Map(Object.entries({one:1, two:2}));
// 이 메서드는 객체의 키-값 쌍을 요소([key, value])로 가지는 배열을 반환합니다.
console.log(temp2);

// 반대의 경우
const temp3 = Object.fromEntries(temp2);
console.log(temp3);