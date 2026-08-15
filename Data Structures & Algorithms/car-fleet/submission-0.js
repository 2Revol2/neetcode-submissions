class Solution {
    /**
     * @param {number} target
     * @param {number[]} position
     * @param {number[]} speed
     * @return {number}
     */
    carFleet(target, position, speed) {
        let res = []

        
        for(let i = 0; i < position.length; i++) {

            let hours = Math.floor((target - position[i])/speed[i])

            if(!res.includes(hours)) {
                res.push(hours)
            }
        }

        return res.length

    }
}
