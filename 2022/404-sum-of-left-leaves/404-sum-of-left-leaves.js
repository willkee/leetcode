/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var sumOfLeftLeaves = function(root) {
    /*
    Time complexity: O(n)
    Space complexity: O(n)
    
    Depth-first search - start with a stack and pre-load root
    We know that we have reached a leaf when current.left AND current.right === NULL
    A pointer that lags behind "current" to determine whether we went down the left or right node
    If we traversed to the left, add it to the total resulting output.
    return result.
    */
    
    let stack = [root];
    let res = 0;
    
    while (stack.length) {
        let current = stack.pop();
        
        if (current.left && !current.left.left && !current.left.right) {
            res += current.left.val;
        }
        
        if (current.left) {
            stack.push(current.left)
        }
        if (current.right) {
            stack.push(current.right)
        }
    }
    
    return res;
};