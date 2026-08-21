class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        let maxLength = 0;
        for (let i = 0; i < s.length; i++) {
            let j = i + 1;
            let substring = s[i];
            const subHash = new Set(substring);
            while (j < s.length) {
                if (subHash.has(s[j])) {
                    break;
                }

                subHash.add(s[j]);
                substring += s[j];
                j++;
            }
            maxLength = Math.max(maxLength, substring.length);
        }
        return maxLength;
    }
}
