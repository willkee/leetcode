/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
    /*
    
    Edge/Corner Cases:
    if s.length === 1, return s
    
    left pointer, right pointer
    while left < right
    s[left] !== s[right] 
    
    left++
    right++
    
    Time complexity: O(n^2 * log(n))
    Space complexity: O(1)
    */
    let max = "";
    
    for (let i = 0; i < s.length; i++) {
        
        for (let j = 0; j < 2; j++) {
            let left = i;
            let right = i + j;
            
            while (s[left] && s[left] === s[right]) {
                left--;
                right++;
            }
            
            if (right - left - 1 > max.length) {
                max = s.slice(left + 1, right);
            }
        }
//         let start = s[i];
//         for (let j = i + 1; j < s.length; j++) {
//             let end = s[j];
//             const subString = s.slice(i, j + 1);
            
//             if (isPalindrome(subString) && 
//                 subString.length > longestSubString.length) {
//                 longestSubString = subString;
//             }
//         }
//     }
//     return longestSubString;
    };
    return max
}

// const isPalindrome = str => {
//     let left = 0;
//     let right = str.length - 1;
    
//     let pal = true;
//     while (left < right) {
//         if (str[left] !== str[right]) {
//             pal = false;
//         }
//         left++;
//         right--;
//     }
//     return pal;
// }