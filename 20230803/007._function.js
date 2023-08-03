function add (x, y) {
    return x + y;
}

function substract(x, y) {
    return x - y;
}

function multiply(x, y) {
    return x * y;
}

function divide(x, y) {
    return x / y;
}

function minus (num1, num2) {
    return num1 - num2;
}

//문제 2: '10,000,000' 와 같은 문자를 입력받아 `10000000와 같은 숫자를 반환하는 함수
//함수명 고민 잘 해볼것
function delComma (inputString) {
    let y = x.replaceAll(',', '');
    return parseInt(y);
}

//model answer
function stringToNumber(str) {
    let answer = parseInt(str.replaceAll(',', ''))
    return answer;
}

//문제 3: 입력된 문자열을 출력하고 입력된 문자를 쪼개서 출력하는 함수를 만들어주세요
//입력: hello world
//출력: ['w, 'o', 'r', 'l', 'd']
//console도 함수!

function splitString (inputString) {
    console.log(inputString);
    return inputString.split('');
}

// 문제 4: 2개의 숫자가 입력되면 2개의 숫자를 더하고 더한 2개의 숫자를 곱하는 함수를 만들어주세요
//입력: 1, 2
// 출력: (1 + 2) * (1 + 2) = 9

//1번쨰 풀이
function addAndMultiply (x , y) {
    let sum = x + y;
    let multiply = sum * sum;
    return multiply;
}

//2번째 풀이
function add(x, y) {
    return x + y;
}

function addAndMultiply (x,y) {
    let sum = add(x + y) * add(x + y)
    return sum;
}

//3번째 풀이
function addAndMultiply(x, y) {
    //메모리 효율을 위해 함수를 내부에서 만들어서 사용
    function add(x, y) {
        return x + y
    }
    let sum = add(x,y) * add(x, y)
    return sum;
}

//문제 5: x**2 + 4x - 12를 구해주는 함수를 만들어 주세요
//입력: 3
//출력: 9 + 12 - 12 = 9
function quadEquation(x) {
    function power(x) {
        return x**2;
    }

    function multiply(x) {
        return x * 4;
    }

    return power(x) + multiply(x) - 12;
}

//model answer
function calculate(x) {
    return x**2 + 4*x -12;
}

