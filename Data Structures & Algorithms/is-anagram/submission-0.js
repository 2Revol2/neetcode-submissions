class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if(s.length !== t.length) {
            return false
        }
        
        const hash = {}

        for(let i = 0; i < s.length; i++) {
            if(!hash[i]) {
                hash[s[i]] = s[i]
            }
        }

        console.log(hash)


        for(let i =0; i < t.length; i++) {
            if(!hash[t[i]]) {
                return false
            }
        }

        return true
    }
}
