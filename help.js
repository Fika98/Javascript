function findMaxHelper(numbers, start) {
    let maximum  = numbers[start];
    let max_location = start

    for(let i = start; i < numbers.length; i++){
        if(numbers[i] > maximum){
            maximum = numbers[i]
            max_location = i
        }
    }
    return{max_number: maximum, max_index: max_location}
} 

function sortBestWithHelper(numbers){
    
    for(let j = 0; j < numbers.length - 1; j++){
        max = findMaxHelper(numbers, j)
        max_num = max['max_number']
        max_location = max['max_index']

        numbers[max_location] = numbers[j]
        numbers[j] = max_num
    }
    return numbers
}

console.log(sortBestWithHelper([5,4,3,2,1,10,29,80]))