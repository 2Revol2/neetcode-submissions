class Solution {
    /**
     * @param {number[]} piles
     * @param {number} h
     * @return {number}
     */
    minEatingSpeed(piles, h) {
        const sortedPiles = piles.sort((a, b) => a - b)
        let k = 1
        let totalHours = 0;
        let i = 0; 
        while(i < sortedPiles.length) {
            const hours = Math.ceil(piles[i] / k);
            let sum = 0;
            while(sum < piles[i]) {
                totalHours+=hours;
                sum+=k
            }

            if(totalHours > h) {
                k++;
                i=0;
                totalHours=0;
            }

            i++;
        }

        return k
    }
}
