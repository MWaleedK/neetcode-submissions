class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        let seen = {};

        // Count frequencies
        for (let i = 0; i < nums.length; i++) {
            seen[nums[i]] = (seen[nums[i]] || 0) + 1;
        }

        // Sort by frequency
        const sorted = Object.entries(seen)
            .sort((a, b) => b[1] - a[1]);

        // Return top k elements
        return sorted.slice(0, k).map(item => Number(item[0]));
    }
}