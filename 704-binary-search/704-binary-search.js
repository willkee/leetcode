/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    let left = 0;
    let right = nums.length - 1;
    
    while (left <= right) {
        let m = Math.floor((left + right)/2);
        
        if (nums[m] === target) return m;
        
        if (nums[m] > target) {
            right = m - 1
        } else {
            left = m + 1
        }
    }
    return -1;
};