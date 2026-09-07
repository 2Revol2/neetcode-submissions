class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    characterReplacement(s, k) {
        const hash = new Map()
        let res = 0;
        let l = 0;
        let r = 0;

        while(r < s.length) {
            if(!hash.has(s[r])) {
                hash.set(s[r], 1)
            }else {
                 hash.set(s[r], hash.get(s[r]) + 1)
            }

            while((r - l + 1) - Math.max(...hash.values()) > k) {
                if(hash[s[l]] === 0) {
                    hash.delete(s[l])
                }

                hash.set(s[l], hash.get(s[l]) - 1);
                l++;
            }
            res = Math.max(res, r - l + 1)
            r++;
        }


        return res;
    }
}
