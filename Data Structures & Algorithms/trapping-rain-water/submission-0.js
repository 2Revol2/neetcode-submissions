class Solution {
    /**
     * @param {number[]} height
     * @return {number}
     */
    trap(height) {
        let maxLeftArr = [];
        let maxRightArr = [];
        let min = [];
        let maxL = 0;
        let maxR = 0;
        let res = 0;

        for (let i = 0; i < height.length; i++) {
            if (maxL < height[i]) {
                maxL = height[i];
            }
            maxLeftArr.push(maxL);
        }

        for (let i = height.length - 1; i >= 0; i--) {
            if (maxR < height[i]) {
                maxR = height[i];
            }
             maxRightArr[i] = maxR;
        }

        for (let i = 0; i < height.length; i++) {
            min.push(Math.min(maxLeftArr[i], maxRightArr[i]));
        }

        for (let i = 0; i < height.length; i++) {
            if (min[i] - height[i] >= 0) {
                res += min[i] - height[i];
            }
        }

        return res
    }
}
