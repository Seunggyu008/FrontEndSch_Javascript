//1. pending
function sayHello() {
    //sayHello()함수가 실행된 이후 성공 시 resolve, 실패 시 reject
    return new Promise((resolve, reject) => {
        //성공 시
        const hello = "hello hello"
        resolve(hello);

        //실패 시
        reject(new Error());
    });
}

//async와 await을 사용하는 방법

//promise는 비동기로 실행되기에 await을 사용 안할시 sayHello()함수가 실행되기 전에 
//sayHello()함수 아래의 코드가 실행될 수 있기때문에 그걸 방지하기위하여 사용된다.
//await을 사용하기 위해선 async라는 문법을 함수 앞에 붙혀줘야된다.
//.then을 사용하기보단 가독성이 좀 더 높아진다는 장점이 있다.
async function test() {
    const hello1 = await sayHello();
    console.log(hello1);
}

test();

//then을 사용하는 방법

sayHello()
.then((resolvedData)=> {
    console.log(resolvedData);
    return(resolvedData);
    })
//.then을 이어서 사용할경우, 전 then의 사용된 data를 이어서 사용할수가있다.
.then((resolvedData) => {
    console.log(resolvedData);
    return(resolvedData);
})
.then((resolvedData)=> {
    console.log(resolvedData);
})
//에러가 발생했을 경우 error를 잡기위한 catch문법
//무조건 마지막에 사용해야한다
.catch((error) => {
    console.log(error);
    });
