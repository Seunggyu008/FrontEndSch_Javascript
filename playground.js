function solution(d, budget) {
    let sortedD = [];
    let answer = 0;


    sortedD = d.sort((a, b) => a - b);

    //정렬된 배열을 
    for(let i = 0; i <= sortedD.length; i++) {
        let dividedValue = sortedD[i] + sortedD[i+1]

        if (dividedValue >= budget) {
            break;
        }
        answer++;
    }
    return answer;
}

console.log(solution([1, 3, 2, 5 , 4], 9));