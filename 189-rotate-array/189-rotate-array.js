/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function(nums, k) {
    if (!k || nums.length === 1) return;
    if (nums.length === k) return;
    k = k % nums.length

    nums.unshift(...nums.slice(-k))
    nums.splice(-k)
};