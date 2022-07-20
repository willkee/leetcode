/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function(matrix) {
    for (let i = 0; i < matrix.length; i++) {
        for (let j = i + 1; j < matrix.length; j++) {
            [matrix[i][j], matrix[j][i]] = [matrix[j][i], matrix[i][j]]
        }
    }
    
    for (let i = 0; i < matrix.length; i++) {
        let left = 0;
        let right = matrix.length - 1;
        let row = matrix[i];
        
        while (left < right) {
            [row[left], row[right]] = [row[right], row[left]]
            left++;
            right--;
        }
    }
};