class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        // O(n)
        if (!nums.length) {
            return 0;
        }

        if (nums.length === 1) {
            return 1;
        }

        let maxLength = 0

        const hash = new Set(nums)
        for(let i = 0; i < nums.length; i++) {
            let length = 1
            if(hash.has(nums[i] - 1)) {
                continue
            }
            let j = 1
            while(hash.has(nums[i] + j)) {
                length++;
                j++;
            }


            if(length > maxLength) {
                maxLength = length
            }
        }
        return maxLength
    }
}
