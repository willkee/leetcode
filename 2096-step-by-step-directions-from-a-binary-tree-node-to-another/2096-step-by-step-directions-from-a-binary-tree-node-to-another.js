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
 * @param {number} startValue
 * @param {number} destValue
 * @return {string}
 */
var getDirections = function(root, startValue, destValue) {
    const getPath = (curr, val, path = "") => {
        if (!curr) return '';
        if (curr.val === val) return path;
        
        return getPath(curr.left, val, path + "L") + getPath(curr.right, val, path + "R");
    }
    
    const start = getPath(root, startValue);
    const end = getPath(root, destValue);
    
    let i = 0;
    while (i < start.length && i < end.length && start[i] === end[i]) i++;
    
    let output = '';
    let climbCount = start.length - i;
    
    output += "U".repeat(start.length - i);
    return output + end.slice(i);
};