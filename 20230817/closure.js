const person = function () {
    let age = 15;

    return {
        name: 'jaehyun',

        getAge() {
            return age;
        },

        setAge(val) {
            age = val
        }
    }
}

const man = person();


//외부함수 스코프에선 내부함수 스코프에 접근불가
//밖에선 바로 inner 함수에 접근할수없다
const outer = function () {
    let a = 1;

    const inner = function (d) {
        let b = 5;
        let c = 6;
        a = a + b + c + d;

        console.log(a);
    }

    return inner;
}

const newInner = outer(); // 그렇기에 외부함수 스코프에서 변수를 선언하여 내부함수가 참조할수있게한다.

newInner(1); //이 변수는 내부함수인 inner에게 접근할수있다. 그렇기에 매개변수인 d의 값으로 1을 참조할수있는 것.
