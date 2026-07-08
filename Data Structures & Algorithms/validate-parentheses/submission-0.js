class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        
        // O(n)
        const stack = []
        const hash = {
            "}": "{",
            ")": "(",
            "]": "[",
        };


        for(let i = 0; i < s.length; i++) {
            if(hash[s[i]]) {
                if(stack && stack[stack.length - 1] === hash[s[i]]) {
                    stack.pop()
                }else {
                    return false
                }
            }else {
                stack.push(s[i])
            }
        }

        return stack.length ? false : true
    }
}
