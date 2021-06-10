//https://www.hackerrank.com/challenges/js10-arrows/problem

function modifyArray(nums) {
    return nums.map(val => {
        if (val%2 === 0){
            return val * 2
        }
        return val * 3
    })
}

console.log(modifyArray([1,2,3,4,5]))