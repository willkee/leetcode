/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    const pairs = [];
    
    for (const str of strs) {
        const sortedWord = str.split("").sort().join("");
        pairs.push([str, sortedWord])
    }
    
    const groups = {};
    
    for (let i = 0; i < pairs.length; i++) {
        const key = pairs[i][1];
        const word = pairs[i][0];        
                        
        if (groups[key]) groups[key].push(word);
        else groups[key] = [word]
    }
    
    return Object.values(groups)
};