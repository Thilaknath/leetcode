// https://www.hackerrank.com/challenges/30-arrays/problem

function reverse(arr) {
    return arr.join("").split('').reverse();
}

console.log(reverse([1,2,3,4]))