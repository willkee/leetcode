/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
    /*
    
    hashMap -> number as the key, value is num of repetitions of that num
    Object.entries [[num, repetitions], [num, repetitions]];
    .sort((a, b) => b[1] - a[1]);
    
    res = [];
    let i = 0;
    
    while (i <= k) {
        i++
    }
    
    Time: O(n log n)
    Space: O(n)
    
    */
    
    const numRepetitions = {};
    
    for (const num of nums) {
        numRepetitions[num] ? numRepetitions[num]++ : numRepetitions[num] = 1;
    }
    
    const sorted = Object.entries(numRepetitions).sort((a, b) => b[1] - a[1]);
    
    const res = [];
    let i = 0;
    
    while (i < k) {
        res.push(sorted[i][0]);
        i++;
    }
    return res;
};