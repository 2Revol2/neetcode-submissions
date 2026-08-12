class Solution {
    /**
     * @param {string[]} tokens
     * @return {number}
     */
    evalRPN(tokens) {
        const stack = [];

        for (let i = 0; i < tokens.length; i++) {
            if (tokens[i] === "+") {
                stack.push(stack.pop() + stack.pop());
            } else if (tokens[i] === "*") {
                stack.push(stack.pop() * stack.pop());
            } else if (tokens[i] === "-") {
                let val1  = stack.pop()
                let val2  = stack.pop()
                stack.push(val2 - val1);
            } else if (tokens[i] === "/") {
                let val1  = stack.pop()
                let val2  = stack.pop()
                stack.push(Math.trunc(val2 / val1));
            } else {
                stack.push(Number(tokens[i]));
            }
        }

        return stack[0];
    }
}
