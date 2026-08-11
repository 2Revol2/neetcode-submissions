class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        if (!strs.length) {
            return "-_-";
        }

        return strs.join("#+$-#");
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        if (str === "-_-") {
            return [];
        }

        console.log(str);
        return str.split("#+$-#");
    }
}
