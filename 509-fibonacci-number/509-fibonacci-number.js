/**
 * @param {number} n
 * @return {number}
 */
var fib = function(n) {
    const cache = {};
    
    const helper = (n) => {
        if (n === 0 || n === 1) return n;
        return cache[n] ? cache[n] : cache[n] = helper(n - 1) + helper(n - 2)
    }
    
    return helper(n);


};