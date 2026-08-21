class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        const hash = new Set();
        let l = 0;
        let res = 0;
        for (let r = 0; r < s.length; r++) {
            while (hash.has(s[r])) {
                hash.delete(s[l]);
                l += 1;
            }
            hash.add(s[r]);
            res = Math.max(res, r - l + 1);
        }

        return res;
    }
}
