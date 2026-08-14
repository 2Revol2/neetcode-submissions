class Solution {
    /**
     * @param {string[]} tokens
     * @return {number}
     */
    evalRPN(tokens) {
        const stack = [];

        for (let i = 0; i < tokens.length; i++) {
            if (Number(tokens[i])) {
                stack.push(Number(tokens[i]));
            } else {
                let val1 = stack.pop();
                let val2 = stack.pop();
                if (tokens[i] === "+") {
                    stack.push(val1 + val2);
                } else if (tokens[i] === "*") {
                   stack.push(val1 * val2)
                }else if(tokens[i] === "-") {
                    stack.push( val2 - val1)
                }else if(tokens[i] === "/") {
                    stack.push( val2 / val1)
                }
            }
        }

        return stack[0]
    }
}
