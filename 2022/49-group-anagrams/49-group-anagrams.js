/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(words) {
    const groups = {};
    
    for (const word of words) {
        const sorted = word.split("").sort().join("");
        
        if (groups[sorted]) groups[sorted].push(word);
        else groups[sorted] = [word]
    }
    return Object.values(groups)
};