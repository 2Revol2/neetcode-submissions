class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        // left=buy, right=sell
        let left = 0
        let right = 1
        let maxVal = 0;

        while(right < prices.length) {
            if(prices[left] < prices[right]) {
               const profit = prices[right] - prices[left]
               if(profit > maxVal) {
                maxVal = profit
               }
            }else {
                left=right
            }

            right+=1
        }

        return maxVal
    }
}
