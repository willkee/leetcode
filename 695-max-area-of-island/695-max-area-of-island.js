/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxAreaOfIsland = function(grid) {
    let maxArea = 0;
    let maxR = grid.length - 1;
    let maxC = grid[0].length - 1;
    
    const dfs = (r, c) => {
        if (r < 0 || c < 0 || r > maxR || c > maxC || grid[r][c] === 0) return 0;
        
        grid[r][c] = 0;
        return dfs(r-1, c) + dfs(r+1, c) + dfs(r, c-1) + dfs(r, c+1) + 1;
    }
    
    for (let r = 0; r <= maxR; r++) {
        for (let c = 0; c <= maxC; c++) {
            if (grid[r][c]) maxArea = Math.max(maxArea, dfs(r, c))
        }
    }
    return maxArea;
};