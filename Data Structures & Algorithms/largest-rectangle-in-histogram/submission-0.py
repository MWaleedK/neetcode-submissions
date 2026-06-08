class Solution:
    def largestRectangleArea(self, heights: List[int]) -> int:

        stack = []  # stores indices
        max_area = 0

        for i in range(len(heights) + 1):
            curr_height = 0 if i == len(heights) else heights[i]

            while stack and heights[stack[-1]] > curr_height:
                h = heights[stack.pop()]

                width = i if not stack else i - stack[-1] - 1

                max_area = max(max_area, h * width)

            stack.append(i)

        return max_area