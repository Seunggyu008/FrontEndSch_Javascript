//add all numbers in the array
function addAll(arr) {
    if(arr.length === 0) {
        return 0;
    }

    return arr[0] + addAll(arr.slice(1));
}

console.log(addAll([1, 2, 3, 4]))
