/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    /*
    
    Edge cases:

    If the length of nums === 1, then return nums
    
    Create a variable, i, to track the index as we iterate through nums.
    Create a while loop;
    
    If the value at nums[i] is 0, we splice the 0 out of the array.
    Push a 0 to the end.
    Continue, do not increment "i".
    
    Else, increment i.
    
    Time complexity: O(n) where n is the number of elements in nums.
    Space complexity: O(1).
    
    */
    
    if (nums.length === 1) return nums;
    
    let i = 0;
    let j = 0;
    let len = nums.length;
    
    
    while (i < len) {
        if (j === nums.length) break;
        
        if (nums[i] === 0) {
            nums.splice(i, 1);
            nums.push(0);
            j++;
        } else {
            i++;
        }
    }
    
    return nums;
};