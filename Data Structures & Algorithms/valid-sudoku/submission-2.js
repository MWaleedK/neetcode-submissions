class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(board) {
        const boardRows=9;
        const boardCols =9;
        const rows = Array.from({length:boardRows}, () => new Set());
        const cols = Array.from({length:boardCols}, () => new Set());
        const boxes = Array.from({length:boardRows},() => new Set());
        


        for (let r=0; r< boardRows; r++){
            for (let c=0; c<boardCols; c++)
            {
                let val = board[r][c];
                if(val === ".") continue;

                let boxIndex = Math.floor(r/3) *3 + Math.floor(c/3);

                if(rows[r].has(val)) return false;
                if(cols[c].has(val)) return false;
                if (boxes[boxIndex].has(val)) return false;

                rows[r].add(val);
                cols[c].add(val);
                boxes[boxIndex].add(val);                
            }
        }
        return true;
        
    }
}
