/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {TreeNode}
 */
var mergeTrees = function(root1, root2) {
    if (!root1 && !root2) return null;
    if (!root1) return root2;
    if (!root2) return root1;
    
    const stack = [[root1, root2]];
    
    while (stack.length) {
        let [c1, c2] = stack.pop();
        if (!c1 || !c2) continue
        
        c1.val += c2.val;
        
        if (!c1.left) c1.left = c2.left
        else stack.push([c1.left, c2.left]);
        
        // if (c1.left && c2.left) {
        //     stack.push([c1.left, c2.left]);
        // } else if (c1.left && !c2.left) {
        //     stack.push([c1.left, null]);
        // } else if (!c1.left && c2.left) {
        //     c1.left = c2.left
        //     stack.push([null, c2.left]);
        // }
        
        if (!c1.right) c1.right = c2.right
        else stack.push([c1.right, c2.right]);
        // if (c1.right && c2.right) {
        //     stack.push([c1.right, c2.right]);
        // } else if (c1.right && !c2.right) {
        //     stack.push([c1.right, null]);
        // } else if (!c1.right && c2.right) {
        //     c1.right = c2.right
        //     stack.push([null, c2.right]);
        // }
    }
    
    return root1;
};