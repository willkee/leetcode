/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
    if (target > nums[nums.length - 1]) return nums.length
    const numSet = new Set(nums);
    numSet.add(target);
    
    const newNums = Array.from(numSet).sort((a, b) => a - b);
    
    let l = 0;
    let r = nums.length - 1;
    
    while (l <= r) {
        const mid = Math.floor((l+r)/2);
        if (newNums[mid] === target) return mid;
        if (newNums[mid] < target) {
            l = mid + 1;
        } else {
            r = mid - 1;
        }
    }
};