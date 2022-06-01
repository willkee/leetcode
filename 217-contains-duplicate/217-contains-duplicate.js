/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    /*
    Prediction:
    Time: O(n)
    Space: O(n)
    
    Initialize an empty object
    Iterate through the array
    If the key does not exist in the obj, add to object
    If key exists, return true
    return false outside of the for loop
    

    */
    const obj = {};
    /* obj = {
        
        1: 1,
        2: 1,
        3: 1,
        }
        
        */
    // [1, 2, 3, 1]
    for (let i = 0; i < nums.length; i++) {
        const num = nums[i];
        if (!obj[num]) {
            obj[num] = 1;
        } else {
            return true
        }
    }
    return false
};