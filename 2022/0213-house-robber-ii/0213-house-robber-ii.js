/**
 * @param {number[]} nums
 * @return {number}
 */
const rob = (nums) => {
    if (nums.length === 1) {
        return nums[0];
    }
    
    let max;
    for (let i = 0; i < nums.length; i++) {
        
        let positionZero = find(nums, 0, nums.length - 2);
        let positionOne = find(nums, 1, nums.length - 1);
        
        return Math.max(positionZero, positionOne);
    };
};

const find = (nums, start, end) => {
    let left = 0;
    let mid = 0;

    for (let i = start; i <= end; i++) {

        let right = nums[i];
        let temp = mid;
        let house = left + right;
        mid = Math.max(mid, house);
        left = temp;
    };
    
    return mid;
}






// let highestSingleValue = Math.max(...nums);


// for (let i = 0; i < nums.length; i++) {
//     for (let j = i + 2; j < nums.length; j++) {
//         if (i === 0 && j === nums.length - 1) continue;
//         if (nums[i] + nums[j] > maxSum) maxSum = nums[i] + nums[j]
//         console.log(nums[i], nums[j], nums[i] + nums[j])
//     }
// }
    
//     const hvIndex = nums.indexOf(highestSingleValue);
//     nums[hvIndex] = null;
//     nums[hvIndex - 1] = null;
//     nums[hvIndex + 1] = null;
    
//     let count = 10;
//     let currNums = nums.filter(num => num !== null);
    
//     while (currNums.length) {
//         let currentMax = Math.max(...currNums);
//         let currMaxIndex = currNums.indexOf(currentMax);
//         currNums[currMaxIndex] = null;
//         currNums[currMaxIndex - 1] = null;
//         currNums[currMaxIndex + 1] = null;
//         currNums = nums.filter(num => num !== null);
//         console.log(currNums)
//     }
    
    
//     let currSumA = 0;
//     let currSumB = 0;
    
//     for (let i = 0; i < nums.length - 1; i+=2) {
//         currSumA += nums[i];
//         console.log(nums[i], currSumA, "A")
//     }    
    
//     for (let j = 1; j < nums.length; j+=2) {
//         currSumB += nums[j];
//         console.log(nums[j], currSumB, "B")
//     }
    // return Math.max(highestSingleValue);
//     let left = 0;
//     let mid = 0;
    
//     for (let i = 0; i < nums.length; i++) {
//         const right = nums[i];
        
//         const temp = mid;
//         const house = left + right;
//         mid = Math.max(mid, house);
//         left = temp;
        
//     }
//     return mid;
    
//     let currentMax = 0;
    
//     const indexValues = {};
    
//     for (let i = 0; i < nums.length; i++) {
//         indexValues[i] = nums[i];
//     }
    
//     for (let i = 0; i < nums.length; i++) {
//         const position = nums[i];
//         currentMax += position;
        
//         let remaining;
//         if (i === 0) {
//             remaining = nums.slice(i + 2, nums.length - 1)
//         } else {
//             remaining = nums.slice(i + 2);
//         }
        
//         const maxRemaining = Math.max(...remaining);
//     }

