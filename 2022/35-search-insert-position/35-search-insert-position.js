/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
    if (target < nums[0]) return 0;
    if (target > nums[nums.length - 1]) return nums.length;
    
    let l = 0;
    let r = nums.length - 1;
    
    while (l <= r) {
        const m = Math.floor((l+r)/2);
        if (nums[m] === target || (nums[m] > target && nums[m-1] < target)) return m;
        if (nums[m] < target && nums[m+1] > target) return m+1;
        if (nums[m] < target) l = m+1;
        else r = m-1;
    }
};