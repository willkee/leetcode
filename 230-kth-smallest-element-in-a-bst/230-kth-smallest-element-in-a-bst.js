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
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function(root, k) {
    const arr = [];
    
    const _ = (root, k) => {
        if (root.left) _(root.left, k)
        arr.push(root.val)
        if (root.right) _(root.right, k)
    }
    _(root, k)
    
    return arr[k - 1]
};