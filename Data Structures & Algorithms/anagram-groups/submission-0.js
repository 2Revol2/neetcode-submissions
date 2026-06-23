class Solution {
  
    groupAnagrams(strs) {
        const hash = {}

        if(strs.length === 1) {
            return [strs]
        }

        for(let i = 0; i < strs.length; i++) {
            const item = strs[i].split("").sort().join("");
            console.log(item)
            if(!hash[item]) {
                hash[item] = [strs[i]]
            }else {
                hash[item].push(strs[i])
            }
        }

        const result = Object.values(hash)

        return result
    }
}
