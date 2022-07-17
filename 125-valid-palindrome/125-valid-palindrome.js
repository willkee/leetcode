/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    const alphaNums = new Set('abcdefghijklmnopqrstuvwxyz0123456789'.split(""));
    
    let newStr = "";
    for (const char of s) {
        if (alphaNums.has(char.toLowerCase())) newStr += char.toLowerCase();
    }
    
    let left = 0;
    let right = newStr.length - 1;
    
    while (left <= right) {
        if (newStr[left] !== newStr[right]) return false;
        left++;
        right--;
    }
    
    return true;
};