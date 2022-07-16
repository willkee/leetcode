/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    if (s.length !== t.length) return false;
    
    const letters = {};
    for (let i = 0; i < s.length; i++) {
        const sLetter = s[i];
        
        if (letters[sLetter]) letters[sLetter]++;
        else letters[sLetter] = 1;
    }
    
    for (let i = 0; i < t.length; i++) {
        const tLetter = t[i];
        
        if (letters[tLetter]) letters[tLetter]--;
        else return false;
    }
    
    return Math.max(...Object.values(letters)) === 0
    
};