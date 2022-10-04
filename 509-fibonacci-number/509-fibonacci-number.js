/**
 * @param {number} n
 * @return {number}
 */
var fib = function(n) {
    if (n === 0 || n === 1) return n;
    const cache = {};
    
    if (cache[n]) {
        return cache[n];
    } else {
        return cache[n] = fib(n - 1) + fib(n - 2);
    }
    // return fib(n - 1) + fib(n - 2);
};