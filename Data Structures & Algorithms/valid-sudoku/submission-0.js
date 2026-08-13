class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(board) {
        for (let i = 0; i < board.length; i++) {
            const row = new Set();
            for (let j = 0; j < board[i].length; j++) {
                const rowItem = board[i][j];
                if (rowItem !== ".") {
                    if (row.has(rowItem)) {
                        return false;
                    }
                    row.add(rowItem);
                }
            }
        }

        for (let i = 0; i < board.length; i++) {
            const col = new Set();
            for (let j = 0; j < board.length; j++) {
                const colItem = board[j][i];
                if (colItem !== ".") {
                    if (col.has(colItem)) {
                        return false;
                    }
                    col.add(colItem);
                }
            }
        }

        const subBoxes = new Map();

        for (let i = 0; i < board.length; i++) {
            for (let j = 0; j < board.length; j++) {
                const colBox = Math.floor(j / 3);
                const rowBox = Math.floor(i / 3);
                const key = `box-${colBox}-${rowBox}`;
                const item = board[i][j];

                if (!subBoxes.has(key)) {
                    subBoxes.set(key, []);
                }

                const values = subBoxes.get(key);

                if (item !== ".") {
                    if (values.includes(item)) {
                        return false;
                    }
                    values.push(item);
                }
            }
        }

        return true;
    }
}
