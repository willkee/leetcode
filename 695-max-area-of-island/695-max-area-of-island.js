/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxAreaOfIsland = function(grid) {
    let maxArea = 0;
    let maxR = grid.length - 1;
    let maxC = grid[0].length - 1;
    
    const dfs = (r, c) => {
        // Out of bounds, or we've hit water
        if (r < 0 || c < 0 || r > maxR || c > maxC || grid[r][c] === 0) return 0;
        
        // Sink the land
        grid[r][c] = 0;
        
        // Recursively visit all 4 directions. Add 1 to the end because there was at least 1 land spot upon entering dfs.
        return dfs(r-1, c) + dfs(r+1, c) + dfs(r, c-1) + dfs(r, c+1) + 1;
    }
    
    for (let r = 0; r <= maxR; r++) {
        for (let c = 0; c <= maxC; c++) {
            // If we've hit land, run the dfs function and find the max value
            if (grid[r][c]) maxArea = Math.max(maxArea, dfs(r, c))
        }
    }
    // Return the max value
    return maxArea;
};