class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {string}
     */
    minWindow(s, t) {
        if(s.length < t.length) {
            return ""
        }

        const need = new Map();
        const window = new Map();
        let l = 0;
        let r = 0;
        let have = 0;
        let res = s;
        for (let i = 0; i < t.length; i++) {
            if (need.has(t[i])) {
                need.set(t[i], need.get(t[i]) + 1);
            } else {
                need.set(t[i], 1);
            }
        }

        while (r < s.length) {
            if (window.has(s[r])) {
                window.set(s[r], window.get(s[r]) + 1);
            } else {
                window.set(s[r], 1);
            }

            if (need.has(s[r]) && need.get(s[r]) === window.get(s[r])) {
                have++;
            }

            while (have === need.size) {
                const current = s.substring(l, r + 1);
                if (current.length < res.length) {
                    res = current;
                }

                if (window.has(s[l])) {
                    window.set(s[l], window.get(s[l]) - 1);
                }

                if (need.has(s[l]) && window.get(s[l]) < need.get(s[l])) {
                    have--;
                }

                if (window.get(s[l]) === 0) {
                    window.delete(s[l]);
                }
                l++;
            }
            r++;
        }
        return res;
    }
}
