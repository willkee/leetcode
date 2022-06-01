/**
 * @param {number[]} nums
 * @return {boolean}
 */
// var containsDuplicate = function(nums) {
//     /*
//     Prediction:
//     Time: O(n)
//     Space: O(n)
    
//     Initialize an empty object
//     Iterate through the array
//     If the key does not exist in the obj, add to object
//     If key exists, return true
//     return false outside of the for loop
    

//     */
//     return Array.from(new Set(nums)).length !== nums.length

//     // for (const num of nums) {
//     //     if (!unique.has(num)) {
//     //         unique.add(num)
//     //     } else {
//     //         return true
//     //     }
//     // }
//     // return false
// };
 const containsDuplicate = nums => Array.from(new Set(nums)).length !== nums.length
