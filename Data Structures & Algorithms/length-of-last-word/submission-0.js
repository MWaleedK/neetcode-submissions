class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLastWord(s) {
        let lastString = s.trim().split(" ");
        return lastString[lastString.length-1].length; 
    }
}
