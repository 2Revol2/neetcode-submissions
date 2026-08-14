class Solution {
    /**
     * @param {number[]} temperatures
     * @return {number[]}
     */
    dailyTemperatures(temperatures) {
        let left = 0;
        const res = [];

        while (left < temperatures.length) {
            let right = left + 1;
            let days = 0;
            while (right < temperatures.length) {
                if (temperatures[right] > temperatures[left]) {
                    days++;
                    break;
                }

                if (temperatures[left] > temperatures[right]) {
                    days++;
                    right++;
                }
            }

            if (right === temperatures.length) {
                res.push(0);
            } else {
                res.push(days);
                days = 0;
            }

            left++;
        }

        return res;
    }
}
