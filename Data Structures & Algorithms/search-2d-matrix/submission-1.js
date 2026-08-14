class Solution {
    /**
     * @param {number[][]} matrix
     * @param {number} target
     * @return {boolean}
     */
    searchMatrix(matrix, target) {
        let top = 0;
        let bottom = matrix.length - 1;

        while (top <= bottom) {
            const row = Math.floor((top + bottom) / 2);

            if (target > matrix[row][matrix[row].length]) {
                top = row + 1;
            } else if (target < matrix[row][0]) {
                bottom = row - 1;
            } else {
                break;
            }
        }

        if (top > bottom) {
            return false;
        }

        const row = Math.floor((top + bottom) / 2);
        let left = 0;
        let right = matrix[row].length - 1;

        while (left <= right) {
            let middle = Math.floor((left + right) / 2);

            if (target > matrix[row][middle]) {
                left = middle + 1;
            } else if (target < matrix[row][middle]) {
                right = middle - 1;
            } else {
                return true;
            }
        }

        return false;
    }
}
