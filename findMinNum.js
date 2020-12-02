let array = [5,2,9,8,7,3,1]
const findMinNum = array => array.sort()
findMinNum(array)
console.log(array[0])

            // second way 

const findMin = array => {
let minimum = array[0]
for(i=0; i < array.length; i++){
    if(array[i] < minimum){
         minimum = array[i]
        }
     }
     return minimum
}
console.log(findMin([5,9,8,7,3,8,2,1]))
