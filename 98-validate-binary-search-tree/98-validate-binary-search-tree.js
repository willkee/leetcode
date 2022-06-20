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
 * @return {boolean}
 */
var isValidBST = function(root, state = { prev: -Infinity }) {
    if (!root) return true;
    
    const left = isValidBST(root.left, state)
    if (!left) return false;

    if (root.val <= state.prev) return false
     state.prev = root.val
        
    return isValidBST(root.right, state)
};