function twoSum(nums, target) {
    for (let i = 0; i < nums.length; i++) {
        for(let j = i + 1; j < nums.length; j++) {
            if(nums[i] + nums[j] == target) {
                return [i, j]
            } 
        }
    }
}
console.log(twoSum([2,3,4,5,3], 6))

const used = process.memoryUsage().heapUsed / 1024 / 1024;
console.log(`The script uses approximately ${Math.round(used * 100) / 100} MB`);