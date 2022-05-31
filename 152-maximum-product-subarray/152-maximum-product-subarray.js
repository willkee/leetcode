/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function(nums) {
    /*
    Prediction: 
    Time complexity: O(n)
    Space: O(1)
    
    

    */
    if (nums.length === 1) return nums[0]
    
    let min = 1;
    let max = 1;
    let global = -Infinity;
    
    for (let i = 0; i < nums.length; i++) {
        let temp = max * nums[i];
        
        max = Math.max(max * nums[i], nums[i], min * nums[i])
        min = Math.min(min * nums[i], temp, nums[i])
        global = Math.max(global, max)
    }
    return global;
};