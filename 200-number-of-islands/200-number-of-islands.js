/**
 * @param {character[][]} grid
 * @return {number}
 */

const DIRS = [[0, 1], [1, 0], [0, -1], [-1, 0]]
      
var numIslands = function(grid) {
    let count = 0;
    
    for (let row = 0; row < grid.length; row++) {
        for (let col = 0; col < grid[row].length; col++) {
            if (grid[row][col] === '1') {
                count++;
                
                const stack = [[row, col]];
                
                while (stack.length) {
                    const [r, c] = stack.pop();
                    grid[r][c] = '0'
                    
                    for (const [x, y] of DIRS) {
                        const newRow = r + x;
                        const newCol = c + y;
                        
                        if (newRow < 0 ||
                            newCol < 0 ||
                            newRow >= grid.length ||
                            newCol >= grid[0].length ||
                            grid[newRow][newCol] === '0') { continue; }
                        
                        stack.push([newRow, newCol]);
                    }
                }
            }
        }
    }
    
    return count;
};