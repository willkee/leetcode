/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    for (let i = 0; i < nums.length; i++) {
        const num = nums[i];
        const lookingFor = target - num;
        const idx = nums.indexOf(lookingFor);
        
        if (idx !== -1 && idx !== i) {
            return [i, idx]
        }
    }
};