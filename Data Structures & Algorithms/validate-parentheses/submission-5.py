class Solution:
    def isValid(self, s: str) -> bool:
        stack = []
        test = False

        for i in range(len(s)):
            if s[i] in "]})":
                value =None
                if stack:
                    value = stack.pop()
                if value == "(" and s[i] == ")":
                    test = True
                elif value == "{" and s[i] == "}":
                    test = True
                elif value == "[" and s[i] == "]":
                    test = True
                else:
                    test = False
                    return test
            else:
                stack.append(s[i])
        if stack  == []:
            return True
        else:
            return False

