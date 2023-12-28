/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    /*
    Edge cases:
    
    if s.length === 1, return false
    An odd length is false as well
    
    object with the keys of ( )  { }  [ ]
        
    const obj = {
       "(": 0
       "{": 0
       "[": 0
    }
    
    Prediction
    Time: O(n)
    Space: O(n)
    */
    
    if (s.length % 2 === 1) return false;
    
//     const obj = {
//         "(": 0,
//         "{": 0,
//         "[": 0
//     }
    
//     for (let i = 0; i < s.length; i++) {
//         const char = s[i];
//         if (obj[char] >= 0) {
//             obj[char]++;
//         } else {
//             if (char === ")" && obj["("] > 0) {
//                 obj["("]--;
//             } else if (char === "}" && obj["{"] > 0) {
//                 obj["{"]--;
//             } else if (char === "]" && obj["["] > 0) {
//                 obj["["]--;
//             } else {
//                 return false;
//             }
//         }
//     }
    
//     for (let key in obj) {
//         if (obj[key] !== 0) return false;
//     }
    
//     return true;
    
    let i = 0;
    const stack = [];
    
    const pairs = {
        "(": ")",
        "[": "]",
        "{": "}"
    }
    
    while (i < s.length) {
        const curr = s[i];
        
         if (pairs[curr]) {
            stack.push(pairs[curr]);
        } else {
            const last = stack.pop();
            if (last !== curr) {
                return false
            }
        } 
        i++;
    }
    
    return stack.length === 0
};