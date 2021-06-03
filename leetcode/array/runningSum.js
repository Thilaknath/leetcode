// Input: nums = [1,2,3,4]
// Output: [1,3,6,10]
// Explanation: Running sum is obtained as follows: [1, 1+2, 1+2+3, 1+2+3+4].

function runSum(arr) {
    let sum = 0
    for( let i = 0; i < arr.length; i++){
        sum = sum + arr[i]
        arr[i] = sum
    }

    return arr
} 

console.log(runSum([1,2,3,4]))