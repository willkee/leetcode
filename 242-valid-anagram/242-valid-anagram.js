/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    // Time complexity: O(n)
    // Space complexity: O(n)
    
    if (s.length !== t.length) return false;
    
    const letters = {};
    
    for (const sChar of s) {
        if (letters[sChar]) letters[sChar]++;
        else letters[sChar] = 1;
    }
    
    for (const tChar of t) {
        if (letters[tChar]) letters[tChar]--;
        else return false;
    }
    
    return !Math.max(...Object.values(letters))
    
};