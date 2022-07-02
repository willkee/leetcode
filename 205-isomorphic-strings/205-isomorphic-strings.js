/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function(s, t) {
    if (s.length !== t.length) return false;
    if (s === t) return true;
    
    const sObj = {};
    const tObj = {};
    
    for (let i = 0; i < s.length; i++) {
        const sLetter = s[i];
        const tLetter = t[i];
        
        if (!sObj[sLetter]) sObj[sLetter] = tLetter;
        if (!tObj[tLetter]) tObj[tLetter] = sLetter;
        
        if (tLetter !== sObj[sLetter] || sLetter !== tObj[tLetter]) return false;
    }
    return true;
};