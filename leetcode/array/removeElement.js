// https://leetcode.com/problems/remove-element/

/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
 var removeElement = function(nums, val) {
     return nums.filter((dup) => {
         return dup !== val
     })
};


console.log(removeElement([3,2,2,3], 3))