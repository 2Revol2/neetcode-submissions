class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        const hash = {}
        for(let i = 0; i < nums.length; i++) {
        const num = nums[i]
        if(hash[num] === undefined) {
            hash[num] = num
        }else {
            return true
        }
        }
        return false
    }
}
