/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    let sum = 0;
    let i = 0;
    
    while (i < s.length) {
        let letter = s[i];
        let next = s[i + 1]
        if (letter === "I" && next !== "V" && next !== "X") {
            sum++;
        } else if (letter === "I" && next === "V") {
            sum += 4;
            i += 2;
            continue
        } else if (letter === "I" && next === "X") {
            sum += 9;
            i += 2;
            continue
        }
        
        if (letter === "V") sum += 5;
        
        if (letter === "X" && next !== "L" && next !== "C") {
            sum += 10;
        } else if (letter === "X" && next === "L") {
            sum += 40;
            i += 2;
            continue
        } else if (letter === "X" && next === "C") {
            sum += 90;
            i += 2;
            continue
        }
        
        if (letter === "L") sum += 50;
        
        if (letter === "C" && next !== "D" && next !== "M") {
            sum += 100;
        } else if (letter === "C" && next === "D") {
            sum += 400;
            i += 2;
            continue
        } else if (letter === "C" && next === "M") {
            sum += 900;
            i += 2;
            continue
        }
        
        if (letter === "D") sum += 500;
        if (letter === "M") sum += 1000;
        
        i++;
    }
    
    return sum;
};