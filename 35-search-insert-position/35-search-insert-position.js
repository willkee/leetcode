/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
    if (target < nums[0]) return 0;
    if (target > nums[nums.length - 1]) return nums.length;
    
//     const numSet = new Set(nums);
//     numSet.add(target);
    
//     const newNums = Array.from(numSet).sort((a, b) => a - b);
    
    let l = 0;
    let r = nums.length - 1;
    
    while (l <= r) {
        const mid = Math.floor((l+r)/2);
        if (nums[mid] === target) return mid;
        
        if (nums[mid] < target && nums[mid + 1] > target) {
            return mid + 1;
        }
        
        if (nums[mid] > target && nums[mid - 1] < target) {
            return mid;
        }
        
        if (nums[mid] < target) {
            l = mid + 1;
        } else {
            r = mid - 1;
        }
    }
};