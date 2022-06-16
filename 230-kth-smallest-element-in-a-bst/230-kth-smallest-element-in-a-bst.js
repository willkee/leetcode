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
    
    const _kthSmallest = (root, k) => {
        if (root.left) _kthSmallest(root.left, k)
        arr.push(root.val)
        if (root.right) _kthSmallest(root.right, k)
    }
    _kthSmallest(root, k)
    
    return arr[k - 1]
};