class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        const hash = new Set();

        for (let i = 0; i < s.length; i++) {
            let j = i + 1;
            let substring = s[i];
            const subHash = new Set();
            while (j < s.length && s[j] !== s[i]) {
                if (subHash.has(s[j])) {
                    break;
                }

                if (!subHash.has(s[j])) {
                    substring += s[j];
                    subHash.add(s[j]);
                }

                j++;
            }

            if (!hash.has(substring)) {
                hash.add(substring);
            }
        }

        let maxLength = 0;

        for (const str of hash) {
            maxLength = Math.max(maxLength, str.length);
        }

        return maxLength;
    }
}
