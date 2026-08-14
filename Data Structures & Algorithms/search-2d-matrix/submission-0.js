class Solution {
    /**
     * @param {number[][]} matrix
     * @param {number} target
     * @return {boolean}
     */
    searchMatrix(matrix, target) {
        let leftM = 0;
        let rightM = matrix.length - 1;

        while (leftM <= rightM) {
            let leftP = 0;
            let middleMatIndex = Math.floor((leftM + rightM) / 2);
            let rightP = matrix[middleMatIndex].length - 1;

            if (matrix[middleMatIndex][leftP] <= target && matrix[middleMatIndex][rightP] >= target) {
                while (leftP <= rightP) {
                    const middleI = Math.floor((leftP + rightP) / 2);
                    if (matrix[middleMatIndex][middleI] === target) {
                        return true;
                    }

                    if (matrix[middleMatIndex][middleI] <= target) {
                        leftP = middleI + 1;
                    } else {
                        rightP = middleI - 1;
                    }
                }

                return false;
            } else if (matrix[middleMatIndex][leftP] < target) {
                leftM = middleMatIndex + 1;
            } else {
                rightM = middleMatIndex - 1;
            }
        }

        return false
    }
}
