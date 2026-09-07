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
                let sum = stack[stack.length - 1] + stack[stack.length - 2];
                stack.push(sum)
            }else if(operations[i] === "C") {
                stack.pop()
            }else if(operations[i] === "D") {
                const doubled = stack[stack.length - 1] * 2;
                stack.push(doubled)
            }
        }
        stack.forEach((item) => res+=item)
        return res
    }
}
