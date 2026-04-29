class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        let end = s.length -1;
        let start =0;
        while(start < end){
            while(start < end && !this.isAlphanumeric(s[start])){
                start++;
            }

            while(start < end && !this.isAlphanumeric(s[end])){
                end--;
            }
            if(s[start].toLowerCase() !== s[end].toLowerCase())
            {
                return false;
            }

            start++;
            end--;
        }
        return true;
    }

    isAlphanumeric=(c)=>{
        return((c >= "a" && c<="z") ||
        (c>= "A" && c<="Z") ||
        (c>="0" && c<="9"));
    }
}
