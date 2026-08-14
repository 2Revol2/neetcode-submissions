class Solution {
    /**
     * @param {number[]} numbers
     * @param {number} target
     * @return {number[]}
     */
    twoSum(numbers, target) {
        let leftP = 0;
        let rightP = 1;
        while (leftP !== numbers.length - 1) {
            while (rightP !== numbers.length - 1) {
                if (numbers[leftP] + numbers[rightP] === target) {
                    return [leftP + 1, rightP + 1];
                }
                rightP++;
            }
            leftP++;
        }
    }
}
