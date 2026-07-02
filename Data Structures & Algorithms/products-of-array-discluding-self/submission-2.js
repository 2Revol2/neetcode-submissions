class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        // O(n^2)
        const res = [];
        let temp = 1;
        for (let i = 0; i < nums.length; i++) {
            temp = 1;
            for (let j = 0; j < nums.length; j++) {
                if (i === j) {
                    continue;
                }

                temp = temp * nums[j];
            }

            res.push(temp);
        }

        return res;
    }
}
