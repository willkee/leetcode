/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    const alphaNum = new Set(["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "1", "2", "3", "4", "5", "6", "7", "8", "9", "0"])
    
    let copy = s.slice().toLowerCase().split("");
    
    const arr = [];
    
    while (copy.length) {
        let current = copy.pop();
        if (alphaNum.has(current)) {
            arr.push(current);
        }
    }
    
    return arr.join("") === arr.reverse().join("")
};