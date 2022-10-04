/**
 * @param {number} n
 * @return {number}
 */
var tribonacci = function(n) {
    const cache = {
        0: 0,
        1: 1,
        2: 1
    };
    
    const helper = n => {
        if (n < 2) return n;
        if (n === 2) return 1;
        return cache[n] ? cache[n] : cache[n] = helper(n - 1) + helper(n - 2) + helper(n - 3)
    }
    return helper(n);
};