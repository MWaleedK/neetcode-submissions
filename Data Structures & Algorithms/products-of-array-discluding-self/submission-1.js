class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        let array1=[];
        for(let i=0; i<nums.length; i++)
        {
            let cycle=1;
            let j =0;
            while (j< nums.length)
            {
                if(i !== j){
                    cycle*=nums[j];
                }
                j++;
            }
            array1.push(cycle);
        }
        return array1;
    }
}
