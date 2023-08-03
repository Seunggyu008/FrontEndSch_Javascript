//array의 여러가지 형태
let arr1 = [];
let arr2 = [1, 2, 3];
let arr3 = [[1, 2, 3],
            [4, 5, 6],
            [7, 8, 9]]
//만약 6을 꺼낼려면? arr3.[1][2];

let arr4 = ['leehojun', 10, 0.18]
//이렇게 여러개의 타입이 혼합되어 쓰시는 것을 권하지 않습니다
arr4[0] // 'leehojun'
arr4[0][3] // 'h'

// 2. array에 길이 출력
let arr1 = [1, 2, 3]
arr1.length //3
arr1.length = 100
arr1 // [1, 2, 3, empty x 97]
arr1[10] = null
arr1 // [1, 2, 3, empty x 7, null, empty x 89]

let arr3 = [[1, 2, 3],
            [4, 5, 6],
            [7, 8, 9]]

arr2.length // 3
arr2.flat().length

let arr3 = [[[10, 20], [10, [10, 20]]],
            [[10, 20], [10, [10, 20]]],
            [[10, 20], [10, [10, 20]]]]

arr3.flat(infinity) // 이럴시 flat을 반복해서 사용하기보단 infinity을 써서 벗길수있을때까지 벗긴다.