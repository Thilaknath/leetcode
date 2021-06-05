// https://www.hackerrank.com/challenges/js10-arrays/problem

function getSecondLargest(nums) {
    let newA = nums.sort(function (a, b) { return a - b }).filter((val, ind) => nums.indexOf(val) === ind)

    if (newA.length > 1) {
        return (newA[newA.length - 2])
    } else {
        return (newA)
    }
    //    return newA
}

console.log(getSecondLargest([2,3,6,6,5]))