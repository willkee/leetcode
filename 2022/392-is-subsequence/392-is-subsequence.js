/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function(s, t) {
    let i = 0;
    let j = 0;
    
    while (true) {
        if (i === s.length) return true;
        if (j === t.length) return false;
        
        if (t[j] === s[i]) i++;
        j++;
    }    
};