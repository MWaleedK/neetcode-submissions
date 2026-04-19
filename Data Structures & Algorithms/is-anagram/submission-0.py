class Solution:
    def isAnagram(self, s: str, t: str) -> bool:

        c = Counter(s)
        v = Counter(t)
        if c==v:
            return True
        return False
        
        