class Solution {
    /**
     * @param {string[]} strs
     * @return {string}
     */
    longestCommonPrefix(strs){
        if(strs.length===0)return ""; 
        let prefix=strs[0];
        for(let i =0; i<strs.length; i++){
            while(!strs[i].startsWith(prefix))
            {
                prefix = prefix.slice(0, -1); // remove last char
                if (prefix === "") return "";
            }
        }
        return prefix;
    }
}
