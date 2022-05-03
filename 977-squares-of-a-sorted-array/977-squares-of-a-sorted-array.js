/**
 * @param {number[]} nums
 * @return {number[]}
 */
const sortedSquares = nums => nums.map(num => num**2).sort((a,b) => a - b)