class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        let res = "";

        for (let i = 0; i < strs.length; i++) {
            res += strs[i].length + "#" + strs[i];
        }

        return res;
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        const res = [];
        let i = 0;

        while (i < str.length) {
            let j = i;

            while (str[j] != "#") {
                j += 1;
            }
            const length = Number(str.slice(i, j));

            res.push(str.slice(j + 1, j + 1 + length));

            i = j + 1 + length;
        }
        return res;
    }
}
