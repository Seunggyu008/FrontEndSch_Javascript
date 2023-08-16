const person = {
    name: '재현',
    age: 20,
    gender: 'male'
};

//객체안에 있는 key와 value를 구하는 방법
const props = Object.keys(person);

for(let i = 0; i < props.length; i++) {
    console.log(`key: ${props[i]}, value: ${person[props[i]]}`);
}



