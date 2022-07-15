/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    const pairs = [];
    
    for (let i = 0; i < strs.length; i++) {
        const str = strs[i];
        const sortedWord = str.split("").sort().join("");
        pairs.push([str, sortedWord])
    }
    
    const p2 = {};
    const nulls = [];
    const res = [];
    
    for (let i = 0; i < pairs.length; i++) {
        const key = pairs[i][1];
        const word = pairs[i][0];
        
        if (!key || !word) nulls.push("")
        
                        
        if (p2[key]) {
            p2[key].push(word);
        } else {
            p2[key] = [word]
        }
    }
    
    if (nulls.length && Object.values(p2).length) {
        return Object.values(p2)
    } else if (nulls.length) {
        return [nulls]
    } else {
        return Object.values(p2)
    }
    
    
};