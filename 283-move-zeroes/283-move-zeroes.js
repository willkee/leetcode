/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    let i = 0;
    let count = 0;
    while (i < nums.length) {
        if (nums[i] === 0) {
            count++;
            nums.splice(i, 1);
        } else {
            i++;
        }
    }
    nums.push(..."0".repeat(count))

};