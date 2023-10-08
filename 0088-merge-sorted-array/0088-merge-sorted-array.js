/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
    let pointer = m + n;

    while (n > 0) {
        nums1[pointer - 1] = nums2[n - 1];
        n--;
        pointer--;
    }
    
    nums1.sort((a, b) => a - b);
};