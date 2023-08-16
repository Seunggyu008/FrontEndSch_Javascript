//array
const fruits = ['사과', '파인애플', '수박']
const vegetables = ['배추', '토마토', '쌈']
const ingredients = [...fruits, ...vegetables]

ingredients.push('소고기');
console.log(vegetables);
console.log(`필요한 재료: ${ingredients}`)
//push 후 에도 vegetables의 data는 수정되지 않고 보존된다.
//이럴경우 원본 데이터의 추적이 쉬워진다.



//object
const chestExercise = {
    chest: 'benchpress'
}

const legExercise = {
    legs: 'squat'
}

const myExercise = {...chestExercise, ...legExercise};
console.log(myExercise);