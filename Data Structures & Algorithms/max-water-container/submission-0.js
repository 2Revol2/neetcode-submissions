class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {
        let l = 0;
        let arr = [];


        while(l < heights.length) {
            let r = l + 1;

            while(r < heights.length) {
                const diff = r - l;

                let minVal = heights[l] > heights[r] ? heights[r] : heights[l];

                arr.push(diff * minVal);
                r++;
            }
            l++;
        }
        return Math.max(...arr)
    }
}
