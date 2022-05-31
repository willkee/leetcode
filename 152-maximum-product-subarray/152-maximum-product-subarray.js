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
    let global = Math.max(...nums);
    
    for (let i = 0; i < nums.length; i++) {
        let n = nums[i];
        let temp = max * n;
        
        if (n === 0) {
            min = 1;
            max = 1;
        } else {
            max = Math.max(temp, min * n, n)
            min = Math.min(temp, min * n, n)
            global = Math.max(global, max)
        }
    }
    
    return global;
};