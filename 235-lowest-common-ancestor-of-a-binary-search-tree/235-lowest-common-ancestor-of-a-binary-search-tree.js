/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function(root, p, q) {
    // if (p <= root.val && q >= root.val) return root;
    
    while (root) {
        console.log("ENTER WHILE")
        if (p.val < root.val && q.val < root.val) {
            console.log("A")
            root = root.left;
        } else if (p.val > root.val && q.val > root.val) {
            console.log("B")
            root = root.right;
        } else {
            console.log("C")
            break;
        }
    }
    return root;
};