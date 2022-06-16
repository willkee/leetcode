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
//     /*
//         Time complexity: O(n) where n is the number of nodes
//         Space complexity: O(n) (worst-case where tree resembles a linked list)
//     */
//     const vals = [];
    
//     const _kthSmallest = (root) => {
//         if (root.left) _kthSmallest(root.left)
//         vals.push(root.val)
//         if (root.right) _kthSmallest(root.right)
//     }
    
//     _kthSmallest(root)
//     return vals[k - 1]
    
    let count = 1
    let val;
  const dfs = root => {
    if (!root) return;

    dfs(root.left);

    if (count === k) {
      val = root.val;
    }
    count++;

    dfs(root.right);
  }
  dfs(root);
  return val;
};