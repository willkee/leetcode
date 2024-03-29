/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    if (!s.length || s.length === 1) return s.length;
    
    let curr = "";
    let longest = "";
    
    for (let i = 0; i < s.length; i++) {
        let j = curr.indexOf(s[i]);
        
        if (j === -1) {
            // Letter does not exist in the current string--add to string.
            curr += s[i];
        } else {
            // Letter exists:
            if (curr.length > longest.length) {
                // If the length of current string is longer than length of "longest" string,
                // replace longest string with current string.
                longest = curr;
            }
            curr = curr.slice(j + 1) + s[i];
        }

    }

    if (curr.length > longest.length) longest = curr;
    return longest.length;
};