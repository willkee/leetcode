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
    
    let min = 1;
    let max = 1;
    let global = -Infinity;
    
    for (let i = 0; i < nums.length; i++) {
        let n = nums[i];
        let temp = max * n;
        
        max = Math.max(temp, n, min * n)
        min = Math.min(min * n, temp, n)
        global = Math.max(global, max)
    }
    
    return global;
};