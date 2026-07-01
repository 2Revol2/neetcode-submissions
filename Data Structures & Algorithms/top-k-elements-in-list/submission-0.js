class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        const hash = {};
        const res = [];

        for (let i = 0; i < nums.length; i++) {
            const num = nums[i];

            if (!hash[num]) {
                hash[num] = 1;
            } else {
                hash[num]++;
            }
        }

        const sortable = [];
        for (let val in hash) {
            sortable.push([val, hash[val]]);
        }

        sortable.sort(function (a, b) {
            return b[1] - a[1];
        });

        for(let i = 0; i < k; i++){
            res.push(sortable[i][0])
        }

        return res;
    }
}
