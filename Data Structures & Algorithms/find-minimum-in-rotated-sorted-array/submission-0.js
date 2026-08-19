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
            if(nums[l] < minVal) {
                minVal = nums[l];
                l++;
            }else if (nums[r] < minVal) {
                minVal = nums[r];
                r--;
            }else {
                l++;
                r--;
            }
        }

        return minVal
    }
}
