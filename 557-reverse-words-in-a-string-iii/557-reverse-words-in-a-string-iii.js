/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    s = s.split(" ")
    for (let i = 0; i < s.length; i++) {
        let word = s[i];
        s[i] = word.split("").reverse().join("")
    }
    return s.join(" ");
};