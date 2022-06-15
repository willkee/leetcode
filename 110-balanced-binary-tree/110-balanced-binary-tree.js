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
var isBalanced = function(root) {
    let res = true;
    
    const getHeight = root => {
        if (!root) return 0;
        
        let left = getHeight(root.left);
        let right = getHeight(root.right);
        
        if (Math.abs(left - right) > 1) {
            res = false;
        }
        
        return Math.max(left, right) + 1;
    }
    
    getHeight(root);
    return res;

    
  /*
  Prediction:
  Time: O(n)
  Space: O(n)
  
  Breadth first search using a stack
  I want a counter variable to count the number of nodes 
  
  const queue = [[root, 0]]
  let minLevel = Infinity;
  let maxLevel = 0;
  
  while (queue.length) {
    const [current, level] = queue.shift()

      const leaf = !current.left && !current.right

      if (leaf) {
        if (level < minLevel) {
            minLevel = level
        }
        if (level > maxLevel) {
            maxLevel = level
        }
      } else {
        if (current.left) {
            queue.push([current.left, ++level])
        }
        if (current.right) {
            queue.push([current.right, ++level])
        }
      }
  }

  return (maxLevel - minLevel) <= 1
  
  
  */
//     if (!root || (!root.left && !root.right)) return true
    
//     const queue = [[root, 0]]
//     let minLevel = Infinity;
//     let maxLevel = 0;
    
//     while (queue.length) {
//         const [current, level] = queue.shift();
        
// //         const hasChildren = current.left && current.right
        
// //         if (hasChildren) {
// //             queue.push([current.left, level+1])
// //             queue.push([current.right, level+1])
// //         } else {
// //             if (current.left) queue.push([current.left, level+1])
// //             if (current.right) queue.push([current.right, level+1])
//         if (level > maxLevel) maxLevel = level
// //         }
        
//         if (!current.left || !current.right) {
//             if (level < minLevel) minLevel = level
//         }
        
//         if (current.left) queue.push([current.left, level+1])
//         if (current.right) queue.push([current.right, level+1])
        
//     }
//     console.log(minLevel, maxLevel)
//     return (maxLevel - minLevel) <= 1
};