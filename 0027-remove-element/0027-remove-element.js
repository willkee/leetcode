/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
    let k = 0;
    for (let i = 0; i < nums.length; i++) {
        const el = nums[i];
        if (el === val) {
            nums.splice(i, 1);
            i--;
        } else {
            k++;
        }
    }
    return k;
};