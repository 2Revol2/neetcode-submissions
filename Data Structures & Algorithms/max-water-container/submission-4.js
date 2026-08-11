class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {
        let l = 0;
        let r = heights.length - 1

        let res = 0;


        while(l < r) {
            const diff = r - l;
            const minVal = Math.min(heights[l], heights[r])
            
            if(res < diff * minVal) {
                res = diff * minVal
            }

            if(heights[l] < heights[r]) {
                l++
            }else {
                r--
            }

        }

        return res
    }
}
