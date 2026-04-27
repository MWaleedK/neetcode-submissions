class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        let array1="";
        for (let str of strs){
            array1+=`${String(str.length)}#${str}`; 
        }
        return array1; 
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        let i=0;
        let array1=[];
        let delim="#";
        while(i<str.length)
        {
            let j = i;

            while(str[j]!==delim){
                j++;
            }

            let length = Number(str.slice(i,j));
            let word = str.slice(j+1, j+1+length);

            array1.push(word);
            i = j+length+1;
        }
        return array1;
    }
}
