/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {
    /*
    
    Edge cases:
    [["0"]]
    [["1"]]
    
    Fastest O(n * m)
    
     2 for loops:
     inside the inner for loop:
     if we have water, move on
     
     if we have land:
     increment count by 1
     
     whatever index we're at, reassign 1 to 0
     grid[+1][0], grid[-1][0], grid[0][+1], grid[0][-1]
    
    */
    
    let islandCount = 0;
    
    for (let row = 0; row < grid.length; row++) {
        for (let col = 0; col < grid[row].length; col++) {
            if (grid[row][col] === "0") continue;
            
            // Found land
            islandCount++;
            traverseIsland(row, col, grid);
        }
    }
    return islandCount;
};

const traverseIsland = (row, col, grid) => {
    if (row < 0 || 
        row >= grid.length || 
        col < 0 || 
        col >= grid[row].length ||
        grid[row][col] === "0"
       ) return;
    
    grid[row][col] = "0";
    
    traverseIsland(row + 1, col, grid);
    traverseIsland(row - 1, col, grid);
    traverseIsland(row, col + 1, grid);
    traverseIsland(row, col - 1, grid);
}