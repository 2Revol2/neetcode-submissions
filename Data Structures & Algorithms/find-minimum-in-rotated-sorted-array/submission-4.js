class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findMin(nums) {
        let l = 0
        let r = nums.length - 1;
        let minVal = nums[l];
        while(l < r) {
            let m = Math.floor((l + r)/2)
            minVal = Math.min(minVal, nums[m])
            if(nums[m] > nums[r]) {
                l = m + 1
            }else {
                r = m
            }
        }

        return minVal
    }
}
