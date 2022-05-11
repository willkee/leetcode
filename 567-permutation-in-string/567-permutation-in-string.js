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
    
    // const obj = {
    //     a: 0, b:0, c:0, d:0, e:0, 
    //     f:0, g:0, h:0, i:0, j:0, 
    //     k:0, l:0, m:0, n:0, o:0, 
    //     p:0, q:0, r:0, s:0, t:0, 
    //     u:0, v:0, w:0, x:0, y:0, 
    //     z:0
    // }    
    
    for (const window of allWindows) {
        const obj = {};
        s1.split("").forEach(ch => obj[ch] ? obj[ch]++ : obj[ch] = 1)
                        
        for (const letter of window) {
            obj[letter]--
        };
        
        let flag = true;
        for (const key in obj) {
            if (obj[key] !== 0) {
                flag = false;
            }
        }
        
        if (flag) return true;


    }
    return false;
};