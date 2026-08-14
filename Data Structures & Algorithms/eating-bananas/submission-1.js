class Solution {
    /**
     * @param {number[]} piles
     * @param {number} h
     * @return {number}
     */
    minEatingSpeed(piles, h) {
        const sortedPiles = piles.sort((a, b) => a - b)
        let k = 1
        while(true) {
            let totalHours = 0;
            for(let j = 0; j < sortedPiles.length; j++) {
                const hours = Math.ceil(piles[j] / k);
                totalHours+=hours;
            }

            if(totalHours <= h) {
               return k
            }
            k++;
        }
    }
}
