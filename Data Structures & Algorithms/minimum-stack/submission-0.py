class MinStack:

    def __init__(self):
        self.normStack = []
        self.minStack = []

    def push(self, val: int) -> None:
        self.normStack.append(val)
        val = min(val, self.minStack[-1] if self.minStack else val)
        self.minStack.append(val)
        

    def pop(self) -> None:
        self.minStack.pop()
        self.normStack.pop()

    def top(self) -> int:
        return self.normStack[-1]

    def getMin(self) -> int:
        return self.minStack[-1]
        
