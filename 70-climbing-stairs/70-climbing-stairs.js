/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    /*
    
    Edge cases: 
        n cannot be 0 or less.
        n = 1 / n = 2, return n;
    
    n = 1; output = 1
    
    n = 2; output = 2
    
    n = 3; output = 3
    
    n = 4; output = 5
    
    1 + 1 + 1 + 1
    1 + 1 + 2
    1 + 2 + 1
    2 + 1 + 1
    2 + 2
    
    n = 5; output = 8
    
    1 + 1 + 1 + 1 + 1
    1 + 1 + 1 + 2
    1 + 1 + 2 + 1
    1 + 2 + 1 + 1
    2 + 1 + 1 + 1
    2 + 2 + 1
    1 + 2 + 2
    2 + 1 + 2
    
    Recursive (n - 1) + (n - 2)
    
    */
    
    const memo = {};
    
    const _climbStairs = n => {
        if (n <= 2) return n;
        
        if (!memo[n]) {
            memo[n] = _climbStairs(n - 1) + _climbStairs(n - 2)
        }
        
        return memo[n]
    }
    
    return _climbStairs(n)
};