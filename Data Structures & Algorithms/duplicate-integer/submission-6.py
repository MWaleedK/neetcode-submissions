class Solution:
    def hasDuplicate(self, nums: List[int]) -> bool:
        n = len(nums)
        if n <= 1:
            return False
        
        
        seen = {}

        for i in range(n):
            if nums[i] not in seen:
                seen[nums[i]] = 1
            else:
                seen[nums[i]] += 1
            if seen[nums[i]] > 1:
                return True

        return False
