class Solution {
    /**
     * @param {number} target
     * @param {number[]} position
     * @param {number[]} speed
     * @return {number}
     */
    carFleet(target, position, speed) {
        const pair = position.map((p, i) => [p, speed[i]])
        pair.sort((a, b) => b[0] - a[0])
        const stack = [];

        for(let i = 0; i < pair.length; i++) {
            const time = (target - pair[i][0]) / pair[i][1]
            stack.push(time)
            if(stack.length >= 2 && stack[stack.length - 1] <= stack[stack.length - 2]) {
                stack.pop()
            }
        } 
        return stack.length   
    }   
}
