class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isSubsequence(s, t) {
        let S =s.length;
        let T =t.length;
        if (s == '')return true;
        if (S> T) return false;
        let j=0;
        for (let i=0; i< T; i++)
        {
            if(s[j]==t[i]) {
                j++
                }
            if (j==S) return true;
        }
        return false;
        

    }
}
