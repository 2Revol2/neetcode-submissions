class Solution {
    /**
     * @param {number[]} numbers
     * @param {number} target
     * @return {number[]}
     */
    twoSum(numbers, target) {
        let leftP = 0;
        let rightP = numbers.length - 1;

        while(leftP < rightP) {
            if(numbers[leftP] + numbers[rightP] > target) {
                rightP-=1;
            }
            if(numbers[leftP] + numbers[rightP] < target) {
                leftP+=1
            }

            if(numbers[leftP] + numbers[rightP] === target) {
                return [leftP + 1, rightP + 1]
            }
        }
      
    }
}
