class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(board) {
        const subBoxes = new Map();
        for (let i = 0; i < board.length; i++) {
            const row = new Set();
            const col = new Set();
            for (let j = 0; j < board[i].length; j++) {
                const rowItem = board[i][j];
                const colItem = board[j][i];
                if (rowItem !== ".") {
                    if (row.has(rowItem)) {
                        return false;
                    }
                    row.add(rowItem);
                }
                if (colItem !== ".") {
                    if (col.has(colItem)) {
                        return false;
                    }
                    col.add(colItem);
                }

                const colBox = Math.floor(j / 3);
                const rowBox = Math.floor(i / 3);
                const key = `box-${colBox}-${rowBox}`;
                if (!subBoxes.has(key)) {
                    subBoxes.set(key, new Set());
                }

                const box = subBoxes.get(key);

                if (rowItem !== ".") {
                    if (box.has(rowItem)) {
                        return false;
                    }
                    box.add(rowItem);
                }
            }
        }
        return true;
    }
}
