/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(words) {
    const pairs = [];
    
    // for (const word of strs) {
    //     const sortedWord = word.split("").sort().join("");
    //     pairs.push([word, sortedWord])
    // }
    const groups = {};
    
    for (const originalWord of words) {
        const sortedWord = originalWord.split("").sort().join("");
        
        if (groups[sortedWord]) groups[sortedWord].push(originalWord);
        else groups[sortedWord] = [originalWord]
    }
    
//     for (const pair of pairs) {
//         const originalWord = pair[0];
//         const sortedWord = pair[1];
              
//         if (groups[sortedWord]) groups[sortedWord].push(originalWord);
//         else groups[sortedWord] = [originalWord]
//     }
    return Object.values(groups)
};