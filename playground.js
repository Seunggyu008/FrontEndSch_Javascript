/* let userMark = parseInt(prompt('성적을 입력하세요!'));

if(userMark >= 90) {
    console.log("A")
} else if(userMark >= 80) {
    console.log("B")
} else if(userMark >= 70) {
    console.log("C")
} else if (userMark >= 60) {
    console.log("D")
} else {
    console.log("강해져서 돌아와라")




let userGrade = (userMark >= 90) ? console.log("A") :
                (userMark >= 80) ? console.log("B") :
                (userMark >= 70) ? console.log("C") :
                (userMark >= 60) ? console.log("D") :
                console.log("강해져서 돌아와라") */

/*
let score = parseInt(prompt('성적을 입력하세요!'))

switch(true) {
    case score >= 90 :
        console.log('A')
        break;
    case score >=80 :
        console.log("B")
        break;
    case score >=70 :
        console.log("C")
        break;
    case score >=60 :
        console.log("D")
        break;
    default:
        console.log('강해저서 돌아와라')
} */

/* let userMark = parseInt(prompt('점수를 입력해주세요!'));

userGrade = (userMark > 90) ? console.log('A') :
            (userMark > 80) ? console.log('B') :
            (userMark > 70) ? console.log('C') :
            (userMark > 60) ? console.log('D') :
            console.log("강해져서 돌아와라")


//0부터 101까지 짝수의 sum
let s = 0;
for(let i = 0; i < 101; i +=2) {
    document.write(i, '<br');
    s +=i;
    console.log(s);
}
document.write(s, '<br>') */

//구구단
for (let i = 2; i < 10; i++) {
    for(let j = 1; j < 10; j++) {
        console.log(`${i} 곱하기 ${j} 은 ${i*j} <br />`)
    }
}