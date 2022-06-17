/**
 * @param {number} n
 * @return {number}
 */
var fib = function(n) {
    /*
    
    Edge cases: 
    
    n === 0; return 0;
    n === 1; return 1;
    No negative numbers.
    
    I want to solve this with a recursive solution.
    
    I need a base case which will stop the recursive loop.
    
    Base Case:
    
    if n is equal to 0, return 0
    if n is equal to 1, return 1
    if n is equal to 2, return 1
    
    The recursive call:
    
    Calling fib() with n - 1 
    
    fib(n - 1) + fib(n - 2)
    
    Time complexity: O(2^n) without memoization. O(n) with memoization
    Space complexity: O(n) without memoization. O(2n - 2) or O(n) with memoization
    
    */
    
    const memo = {};
    
    const _fib = n => {
        if (n <= 1) return n;
        if (!memo[n]) memo[n] = _fib(n - 1) + _fib(n - 2)
        return memo[n]
    }
    
    return _fib(n)
};

// One-liner Solution:
// const fib = n => n <= 1 ? n : fib(n - 1) + fib(n - 2)