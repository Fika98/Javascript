const findMax = array => {
    array.sort = (a,b) =>{
        return (b-a)
    }
    console.log(array[0])
}
findMax([5,9,8,7,3,9,2,1,20,30,50])



// const findMax = array => {
//     array.sort(function(a,b){
//         return (b-a)
//     })
//     console.log(array[0])
// }
// findMax([5,9,8,7,3,9,2,1,20,30,50])






            //second way
// const findMax = array => {
//     let max = array[0]
//     for(i=0; i < array.length; i++){
//         if(array[i] > max){
//             max = array[i]
//             }
//          }
//          return max
//     }
//    console.log(findMax([5,9,8,7,3,9,2,1,20,30,50]))