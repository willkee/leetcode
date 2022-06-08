/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function(ransomNote, magazine) {
    
    const letters = {};
    
    for (const letter of magazine) {
        letters[letter] ? letters[letter]++ : letters[letter] = 1;
    }
    
    for (const letter of ransomNote) {
        if (!letters[letter] || letters[letter] <= 0) return false;
        letters[letter]--;
    }
    return true
};