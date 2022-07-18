/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {

    const stack = [];
    const res = [];
    
    const helper = (open, closed) => {
        if (open === n && closed === n) res.push(stack.join(""));
        
        if (open < n) {
            stack.push("(");
            helper(open + 1, closed);
            stack.pop();
        }
        
        if (closed < open) {
            stack.push(")")
            helper(open, closed + 1);
            stack.pop();
        }
    }
    
    helper(0, 0);
    return res;
}