/**
 * @param {number[][]} mat
 * @return {number[][]}
 */

const updateMatrix = (mat, row, col) => {
    const queue = [];
    
    for (let row = 0; row < mat.length; row++) {
        for (let col = 0; col < mat[0].length; col++) {
            if (mat[row][col] !== 0) {
                mat[row][col] = "#"
            } else {
                queue.push([row, col])
            }
        }
    }
    
    while (queue.length) {
        const dirs = [[-1, 0], [0, -1], [0, 1], [1, 0]]
        const [r, c] = queue.shift();
        
        for (let i = 0; i < dirs.length; i++) {
            const [dR, dC] = dirs[i];
            const nR = dR+r
            const nC = dC+c
            
            if ((nR >= 0 && nR < mat.length) && 
                (nC >= 0 && nC < mat[0].length) && 
                mat[nR][nC] === "#") {
                
                mat[nR][nC] = mat[r][c] + 1
                queue.push([nR, nC])
            }
        }
    }
    
    return mat
}