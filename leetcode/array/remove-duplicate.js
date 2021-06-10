// https://leetcode.com/problems/remove-duplicates-from-sorted-array/

var removeDuplicates = function(nums) {
    let i = 0;

    for (let j = 1; j < nums.length; j++){
        if(nums[j] != nums[i])
        nums[++i] = nums[j]
    }

    return ++i
};


console.log(removeDuplicates([1,1,2]))