/**
 * @param {number[]} nums
 * @return {number}
 */
const pivotIndex = (nums) => {
    const totalSum = nums.reduce((acc, num) => acc + num, 0);
    let leftSum = 0;
    for (let i = 0; i < nums.length; i++) {
        if (leftSum === totalSum - leftSum - nums[i]) return i;
        leftSum += nums[i]
    }
    return -1;
};