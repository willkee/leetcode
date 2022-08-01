/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    const sArr = s.split(" ");
    const res = [];
    for (const word of sArr) res.push(word.split("").reverse().join(""));
    return res.join(" ")
};