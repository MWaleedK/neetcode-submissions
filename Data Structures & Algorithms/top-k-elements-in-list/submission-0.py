class Solution:
    def topKFrequent(self, nums: List[int], k: int) -> List[int]:

        c = Counter(nums)

        heap =[]

        for keys, values in c.items():
            if len(heap) < k:
                heapq.heappush(heap, (values, keys))
            else:
                heapq.heappushpop(heap, (values, keys))

        return [value for ind,value in heap]