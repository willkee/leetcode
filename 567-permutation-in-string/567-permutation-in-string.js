/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var checkInclusion = function(s1, s2) {
    if (s1.length > s2.length) return false;
    let pointerA = 0;
    let pointerB = pointerA + s1.length;
    
    let numWindows = s2.length - s1.length + 1;
    const allWindows = []
    
    while (numWindows) {
        const window = s2.slice(pointerA, pointerB);
        allWindows.push(window)
        pointerA++;
        pointerB++;
        numWindows--;
    }    
    
    for (const window of allWindows) {
        const obj = {};
        s1.split("").forEach(ch => obj[ch] ? obj[ch]++ : obj[ch] = 1)
                        
        for (const letter of window) {
            obj[letter]--
        };
        
        let match = true;
        for (const key in obj) {
            if (obj[key] !== 0) {
                match = false;
            }
        }
        if (match) return true;
    }
    return false;
};