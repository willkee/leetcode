/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    /*
    
    Create an object/hash map that will start off as empty.
    Start a for loop and iterate through the nums array.
    For each index in the array, we check to see if the object has that value at that index as a key.
        - If it does, increment the count.
        - If it does not, create a key with that value and assign a value of 1.
    
    For loop to iterate through the object.
    If any value in the k/v pairs are >= 2, return true.
    If we make it through the whole object without returning true, return false.
    
    Time complexity: O(n) where n is the number of elements in the nums array.
    Space complexity: O(n) where n is the number of unique values in the nums array.
    
    */
    
    const hashMap = {};
    
    for (const val of nums) {
        if (hashMap[val]) hashMap[val]++;
        else hashMap[val] = 1;
    }
    
    for (const key in hashMap) {
        if (hashMap[key] >= 2) return true;
    }
    
    return false;
};