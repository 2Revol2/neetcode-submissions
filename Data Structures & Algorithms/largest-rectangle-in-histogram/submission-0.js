class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    largestRectangleArea(heights) {
        const stack = []; // index, height
        let maxArea = 0;

        for(let i = 0; i <= heights.length; i++) {
             let start = i;
            while(stack.length > 0 &&  (i === heights.length || heights[i] < stack[stack.length - 1][1])) {
                const [stackI, stackH] = stack.pop();
                maxArea = Math.max(stackH * (i - stackI), maxArea)
                start = stackI
            }
            stack.push([start, heights[i]])
        }

        return maxArea
    }
}
