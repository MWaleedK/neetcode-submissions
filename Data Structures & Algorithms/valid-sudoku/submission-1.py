class Solution:
    def isValidSudoku(self, board: List[List[str]]) -> bool:
        m,n = len(board), len(board[0])

        for i in range(m):
            mySet = set()
            for j in range(n):
                if board[i][j] in  mySet:
                    return False
                elif board[i][j] != ".":
                    mySet.add(board[i][j])
            
        for i in range(n):
            mySet = set()
            for j in range(m):
                if board[j][i] in  mySet:
                    return False
                elif board[j][i] != ".":
                    mySet.add(board[j][i])
        
        start = [(0,0),(0,3),(0,6),(3,0),(3,3),(3,6),(6,0),(6,3),(6,6)]
        for i,j in start:
            mySet = set()
            for row in range(i,i+3):
                for col in range(j,j+3):
                    if board[row][col] in  mySet:
                        return False
                    elif board[row][col] != ".":
                        mySet.add(board[row][col])
        return True

            
                
