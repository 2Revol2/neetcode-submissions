class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let maxVal = 0;
        let left = 0;
        let right = left + 1


        while(right < prices.length) {

            if(prices[left] < prices[right]) {
                const profit = prices[right] - prices[left]
                maxVal = Math.max(profit, maxVal)
            }else {
                left = right
            }
            right++;
        }

        return maxVal
    }
}
