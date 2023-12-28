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
    
    for (const sChar of s) letters[sChar] ? letters[sChar]++ : letters[sChar] = 1
    for (const tChar of t) letters[tChar] ? letters[tChar]-- : false;
    return !Math.max(...Object.values(letters))
    
};