/**
 * @param {number[]} nums
 * @return {number[]}
 */


const runningSum = nums => {
    const res = [];
    let runningSum = 0;
    for (let i = 0; i < nums.length; i++) {
        runningSum += nums[i];
        res.push(runningSum)
    }
    return res;
}