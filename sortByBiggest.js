function sortBestRatingsFirst(numbers) {

    for(let j = 0; j < numbers.length - 1; j++){


        let max_num = numbers[j]
        let max_location = j;

        for (let i = j; i < numbers.length; i++){
            if(numbers[i] > max_num){
                // know max and its index
                max_num = numbers[i]
                max_location = i
            }
        }   
    // swap the first and the last
    numbers[max_location] = numbers[j]
    numbers[j] = max_num
    }   
return numbers

}

console.log(sortBestRatingsFirst([5,8,2,9,3,10]))


