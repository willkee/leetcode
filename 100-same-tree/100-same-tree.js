/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
var isSameTree = function(p, q) {
    /*
    
    if (p.val !== q.val) return false;
    
    Depth-first Traversal:
    let stack = [[p, q]];
    
    while loop:
    pop the last value from the stack.
    currentP = current[0]
    currentQ = current[1]
    
    if currentP.val and currentQ.val are the same -- if not return false
    
    if currentP.left && !currentQ.left -or vice versa- return false
    
    if there is a current.left, then push current.left to the stack
    if there is a current.right, then push current.right to the stack
    
    return true outside the while loop
    
    
    Prediction:
    Time Complexity: O(n)
    Space Complexity: O(n)
    */
    
    if (!p && !q) return true;
    if ((!p && q) || (!q && p)) return false;
    
    let stack = [[p, q]];
    
    while (stack.length) {
        let current = stack.pop();
        let currentP = current[0];
        let currentQ = current[1];
        
        if (currentP.val !== currentQ.val) return false;
        
        if ((currentP.left && !currentQ.left) || (currentQ.left && !currentP.left) || (currentP.right && !currentQ.right) || (currentQ.right && !currentP.right)) {
            return false;
        }
        
        if (currentP.left && currentQ.left) {
            stack.push([currentP.left, currentQ.left])
        }
        
        if (currentP.right && currentQ.right) {
            stack.push([currentP.right, currentQ.right])
        }
    }
    return true;
};