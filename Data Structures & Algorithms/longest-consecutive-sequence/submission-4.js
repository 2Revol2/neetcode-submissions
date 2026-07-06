class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        if (!nums.length) {
            return 0;
        }

        if(nums.length === 1) {
            return 1
        }

        const sortedArr = nums.sort((a, b) => a - b);
        const res = []
        let count = 1;

        for (let i = 0; i < sortedArr.length - 1; i++) {
            const curr = sortedArr[i];
            const next = sortedArr[i + 1];

            if (curr - next === -1) {
                count += 1;
            }else if(curr - next < -1) {
                count = 1
            }
            res.push(count)
        }

        console.log(res, sortedArr);

        return Math.max(...res);
    }
}
