/** 
 * Forward declaration of guess API.
 * @param {number} num   your guess
 * @return 	     -1 if num is higher than the picked number
 *			      1 if num is lower than the picked number
 *               otherwise return 0
 * var guess = function(num) {}
 */

/**
 * @param {number} n
 * @return {number}
 */
const guessNumber = n => {
    let left = 0;
    let right = n;
    
    while (left <= right) {
        let mid = Math.floor((left + right)/2);
        
        let result = guess(mid);
        
        if (result === 0) return mid;
        if (result === 1) {
            left = mid + 1
        } else if (result === -1) {
            right = mid - 1
        }
    }
};