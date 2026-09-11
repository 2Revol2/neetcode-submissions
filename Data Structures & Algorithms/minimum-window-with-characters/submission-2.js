class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {string}
     */
    minWindow(s, t) {
        if (t === "") return "";
        const countT = new Map();
        const window = new Map();
        for (let i = 0; i < t.length; i++) {
            if (countT.has(t[i])) {
                countT.set(t[i], countT.get(t[i]) + 1);
            } else {
                countT.set(t[i], 1);
            }
        }

        let l = 0;
        let r = 0;
        let have = 0;
        let need = countT.size;
        let res = [-1, -1];
        let resLength = Infinity;
        while (r < s.length) {
            const char = s[r];
            if (!window.has(char)) {
                window.set(char, 1);
            } else {
                window.set(char, window.get(char) + 1);
            }
            if (countT.has(char) && window.get(char) === countT.get(char) ) {
                have += 1;
            }

            while (have === need) {
                if (r - l + 1 < resLength) {
                    res = [l, r];
                    resLength = r - l + 1;
                }
                window.set(s[l], window.get(s[l]) - 1);
                if (countT.has(s[l]) && window.get(s[l]) < countT.get(s[l])) {
                    have -= 1;
                }
                l++;
            }
            r++
        }

        const [left, right] = res;

        return resLength === Infinity ? "" : s.slice(left, right + 1);
    }
}
