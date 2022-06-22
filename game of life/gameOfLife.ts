export const create2DArray = (cols, rows) => {
    let twoDArray = [];

    for (let i = 0; i < cols; i++) {
        for(let j = 0; j< rows; j++) {
            twoDArray[i] = [];
        }
    }

    for (let i = 0; i < cols; i++) {
        for(let j = 0; j< rows; j++) {
            twoDArray[i][j] = Math.round(Math.random())
        }
    }

    return twoDArray;
}

export const countNeighbors = (game, i, j) => {
    let sumCells = 0;
    
    sumCells += game[i - 1][j - 1];  
    sumCells += game[i - 1][j];
    sumCells += game[i - 1][j + 1];
    sumCells += game[i + 1][j - 1]; 
    sumCells += game[i][j - 1]; 
    sumCells += game[i][j + 1]; 
    sumCells += game[i + 1][j];
    sumCells += game[i + 1][j + 1];

    return sumCells;
}


export const nextGeneration = (firstGeneration, cols, rows) => {
    let next = [...firstGeneration]

    for (let i = 1; i < cols + 1; i++) {
        for(let j = 1; j < rows + 1; j++) {
            const cell = firstGeneration[i][j];
            
            const neighbors = countNeighbors(next, i, j)
           
            if(cell === 0 && neighbors === 3) {
                next[i][j] = 1;
            } 
            
            if(cell === 1 && neighbors < 2) {
                next[i][j] = 0;
            }

            if(cell === 1 && neighbors >= 2 && neighbors <= 3) {
                next[i][j] = 1
            }

            if(cell == 1 && neighbors >  3) {
                next[i][j] = 0
            }
        }
    }

    return next;
}
