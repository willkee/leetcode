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
    const getPath = (curr, val, res = "") => {
        if (!curr) return '';
        if (curr.val === val) return res;
        
        return getPath(curr.left, val, res + "L") + getPath(curr.right, val, res + "R");
    }
    
    const start = getPath(root, startValue);
    const end = getPath(root, destValue);
    console.log(start, end)
    
    let i = 0;
    while (i < start.length && i < end.length && start[i] === end[i]) i++;
    
    let output = '';
    for (let j = i; j < start.length; j++) output += 'U';
    
    return output + end.slice(i);
};