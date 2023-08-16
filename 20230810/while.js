let input = 0;

do {
  input = prompt("숫자를 입력하세요.");
} while (isNaN(input));

console.log("입력한 숫자는 " + input + "입니다.");




const menu = [
    { name: "아메리카노", price: 2000 },
    { name: "카페라떼", price: 2500 },
    { name: "카페모카", price: 2800 },
    { name: "핫초코", price: 3000 },
    { name: "과일주스", price: 3500 },
];


//1. user로부터 메뉴번호를 받는다
//2. 각 배열의 숫자를 하나씩 붙힌다
//3. for문으로 유저가 타이핑한 메뉴번호랑 맞는 숫자를 console에 출력한다
//4. 종료버튼을 누를시 '종료합니다'를 타이핑한다
let userInput = parseInt(prompt('원하시는 메뉴 번호를 입력해주세요!'));


//풀이
let input1 = 0;
while(input1 !== -1) {
    input1 = parseInt(prompt('메뉴를 선택해주세요: 아메리카노 : 1 / 카페라떼 : 2 / 카페모카 : 3 / 핫초코 : / 과일주스: 5 / 종료하기: -1'));

    switch(input1){
        case 1: 
            console.log(`${menu[0].name} : ${menu[0].price}`)
            break;
        case 2: 
            console.log(`${menu[1].name} : ${menu[1].price}`)
            break;
        case 3: 
            console.log(`${menu[2].name} : ${menu[2].price}`)
            break;
        case 4: 
            console.log(`${menu[3].name} : ${menu[3].price}`)
            break;
        case 5: 
            console.log(`${menu[4].name} : ${menu[4].price}`)
            break;
        case -1:
            console.log(`종료합니다.`)
            break;
        default:
            console.log(`잘못된입력입니다.`)

    }
}




