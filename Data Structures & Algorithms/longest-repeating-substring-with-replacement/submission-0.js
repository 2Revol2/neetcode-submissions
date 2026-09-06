class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    characterReplacement(s, k) {
        const hash = new Map();
        let l = 0;
        let r = 0;
        let res = 0;

        while(r < s.length) {
            if(!hash.has(s[r])) {
                hash.set(s[r], 1)
            }else {
                 hash.set(s[r], hash.get(s[r]) + 1);
            }

            while((r - l + 1) - Math.max(...hash.values()) > k) {
                hash.set(s[l], hash.get(s[l]) - 1);

                if(hash.get(s[l]) === 0) {
                    hash.delete(s[l])
                }
                l++;
            }
            res = Math.max(res, r - l + 1);
            r++;
        }

        return res
    }
}
