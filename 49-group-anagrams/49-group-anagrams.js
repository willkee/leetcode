/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(words) {
    const groups = {};
    
    for (const originalWord of words) {
        const sortedWord = originalWord.split("").sort().join("");
        
        if (groups[sortedWord]) groups[sortedWord].push(originalWord);
        else groups[sortedWord] = [originalWord]
    }

    return Object.values(groups)
};