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
    
    Time complexity: O(2^n)
    Space complexity: O(n)
    
    */
    
    if (n === 0) return 0;
    if (n === 1 || n === 2) return 1;
    
    return fib(n - 1) + fib(n - 2)
};