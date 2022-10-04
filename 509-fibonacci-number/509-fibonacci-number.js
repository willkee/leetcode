/**
 * @param {number} n
 * @return {number}
 */
var fib = function(n) {
    const cache = {};
    const helper = (n) => n < 2 ? n : cache[n] ? cache[n] : cache[n] = helper(n - 1) + helper(n - 2)    
    return helper(n);
};