class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {
        let l = 0;
        let r = heights.length - 1

        let arr = [];


        while(l < r) {
            const diff = r - l;
            const minVal = Math.min(heights[l], heights[r])

            arr.push(diff * minVal);

            if(l < r) {
                l++
            }else {
                r++
            }

        }

        return Math.max(...arr)
    }
}
