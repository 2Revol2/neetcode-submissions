class Solution {
    /**
     * @param {string[]} operations
     * @return {number}
     */
    calPoints(operations) {
        const stack = [];
        let res = 0;
        for(let i = 0; i < operations.length; i++) {
            if(Number(operations[i])) {
                stack.push(Number(operations[i]))
            }else if(operations[i] === "+") {
                let sum = 0;
                stack.forEach((item) => sum+=item)
                stack.push(sum)
            }else if(operations[i] === "C") {
                stack.pop()
            }else if(operations[i] === "D") {
                const doubled = stack[stack.length - 1] * 2;
                stack.push(doubled)
            }

            console.log(stack)
        }

        stack.forEach((item) => res+=item)

        return res
    }
}
