/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
    if (nums.indexOf(target) !== -1) {
        return nums.indexOf(target);
    } else {
        nums.push(target);
        return nums.sort((a, b) => a - b).indexOf(target)
    }
    
    
};