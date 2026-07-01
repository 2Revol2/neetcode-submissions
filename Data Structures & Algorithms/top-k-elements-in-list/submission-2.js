class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        const hash = {};
        const freq = Array.from({ length: nums.length + 1 }, () => []);
        const res = [];
        for (let i = 0; i < nums.length; i++) {
            const num = nums[i];
            if (!hash[num]) {
                hash[num] = 1;
            } else {
                hash[num]++;
            }
        }

        for (const key in hash) {
            const value = hash[key];
            freq[value].push(Number(key));
        }

        for (let i = freq.length - 1; i > 0; i--) {
            if (!freq[i].length) {
                continue;
            }
            res.push(...freq[i]);

            if (res.length === k) {
                return res;
            }
        }
    }
}
