/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxAreaOfIsland = function(grid) {
    let maxArea = 0;
    let maxRows = grid.length - 1;
    let maxCols = grid[0].length - 1;
    
    const dfs = (row, col) => {
        if (row < 0 ||
           col < 0 ||
           row > maxRows ||
           col > maxCols ||
           grid[row][col] === 0) return 0;
        
        grid[row][col] = 0;
        return 1 + dfs(row-1, col) + dfs(row+1, col) + dfs(row, col-1) + dfs(row, col+1);
    }
    
    for (let r = 0; r <= maxRows; r++) {
        for (let c = 0; c <= maxCols; c++) {
            if (grid[r][c] !== 0) {
                maxArea = Math.max(maxArea, dfs(r, c))
            }
        }
    }
    return maxArea;
};