class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        return strs.join("$c$");
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        const res = str.split("$c$");
        if (!res) {
            return [];
        }

        return res;
    }
}
