class Solution:
    def isPalindrome(self, s: str) -> bool:
        newS = s.lower()
        newN = "".join(n for n in newS if (ord(n)>96 and ord(n)<123) or (n in '0123456789'))
        testS = "".join(n for n in newS[::-1] if ord(n)>96 and ord(n)<123 or (n in '0123456789'))
        print(newN)
        print(testS)
        if newN == testS:
            return True
        
        
        
        return False
        