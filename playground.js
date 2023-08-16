const fruits = ['사과', '파인애플', '수박']
const vegetables = ['배추', '토마토', '쌈']
const ingredients = [...fruits, ...vegetables]

ingredients.push('소고기');
console.log(vegetables);
console.log(`필요한 재료: ${ingredients}`)

