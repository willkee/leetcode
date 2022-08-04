/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxAreaOfIsland = function(grid) {
    let maxArea = 0;
    let maxRows = grid.length - 1;
    let maxCols = grid[0].length - 1;
    
    const dfs = (r, c) => {
        if (r < 0 ||
           c < 0 ||
           r > maxRows ||
           c > maxCols ||
           grid[r][c] === 0) return 0;
        
        grid[r][c] = 0;
        return 1 + dfs(r-1, c) + dfs(r+1, c) + dfs(r, c-1) + dfs(r, c+1);
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