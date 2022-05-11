/**
 * @param {number[][]} image
 * @param {number} sr
 * @param {number} sc
 * @param {number} newColor
 * @return {number[][]}
 */
var floodFill = function(image, sr, sc, newColor) {
    if (image[sr][sc] === newColor) return image;
    const stack = [[sr, sc]];
    const val = image[sr][sc];
    
     while (stack.length) {
         let current = stack.pop();
         let cRow = current[0];
         let cCol = current[1];
         image[cRow][cCol] = newColor;
         
         if (cRow > 0) {
             if (image[cRow -1][cCol] === val) {
                stack.push([cRow - 1, cCol])
             }
         }
         if (cRow < image.length - 1) {
             if (image[cRow + 1][cCol] === val) {
                 stack.push([cRow + 1, cCol])
             }
         }
         if (cCol > 0) {
             if (image[cRow][cCol - 1] === val) {
                 stack.push([cRow, cCol - 1])
             }
         }
         if (cCol < image[cRow].length - 1) {
             if (image[cRow][cCol + 1] === val) {
                 stack.push([cRow, cCol + 1])
             }
         }
     }
    return image;

};