/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbers = function(nums) {
    const res = []
    const numsSet = new Set(nums);
    for (let i = 1; i <= nums.length; i++) {
        if (!numsSet.has(i)) {
            res.push(i)
        }
    }
    return res;
};