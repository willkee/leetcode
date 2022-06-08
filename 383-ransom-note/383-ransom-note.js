/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function(ransomNote, magazine) {
    
    const mag = {};
    
    for (let i = 0; i < magazine.length; i++) {
        const letter = magazine[i]
        mag[letter] ? mag[letter]++ : mag[letter] = 1;
    }
    
    for (let i = 0; i < ransomNote.length; i++) {
        const letter = ransomNote[i]
        
        if (!mag[letter] || mag[letter] <= 0) return false;
        
        mag[letter]--;
    }
    return true
};