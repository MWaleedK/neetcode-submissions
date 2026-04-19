class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    majorityElement(nums) {
        let seen = {}
        for(let i =0; i< nums.length; i++)
        {
            if (seen[nums[i]]!=undefined){
                seen[nums[i]]+=1;
            }
            else{
                seen[nums[i]]=1;
        }
        if (seen[nums[i]]> nums.length/2)
        {
            return nums[i];
        }
    }
}
}

