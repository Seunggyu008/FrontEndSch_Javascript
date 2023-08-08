let arr = [13, 9, 10 ,2]

arr.sort((a, b) => {
    console.log('전 a입니다 =>', a, '전 b입니다 =>', b);
    return a-b;
})

console.log(arr);