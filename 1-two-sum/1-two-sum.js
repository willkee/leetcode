/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
const twoSum = (nums, target) => {
    const res = [];
    // for (let i = 0; i < nums.length; i++) {
    //     for (let j = i + 1; j < nums.length; j++) {
    //         if (nums[i] + nums[j] === target) {
    //             res.push(i)
    //             res.push(j)
    //         }
    //     }
    // }
    
    const numsSet = new Set(nums);
    
    for (let i = 0; i < nums.length; i++) {
        let remainder = target - nums[i];
        if (numsSet.has(remainder) && nums.indexOf(remainder) !== i) {
            return [i, nums.indexOf(remainder)]
        }
    }
};