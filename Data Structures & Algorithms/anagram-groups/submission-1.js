class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        let seen = {};
        for(let str of strs)
        {
            let key = str.split("").sort().join("");

            if(!seen[key]){
                seen[key]=[];
            }

            seen[key].push(str); 
        }
        return Object.values(seen);
    }
}
