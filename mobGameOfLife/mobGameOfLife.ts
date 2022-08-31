export const nextDay = (universe: boolean[][]) => {
    return universe.map(
        (oneRow, rowIndex) => oneRow.map(
            (cellAlive, colIndex) =>
            numberOfLiveNeighbours(universe, rowIndex, colIndex) === 3 ||
             (cellAlive && numberOfLiveNeighbours(universe, rowIndex, colIndex) === 2)));
}


export const numberOfLiveNeighbours = (universe, row, column) => {
    const neighbours = [
        universe[row - 1]?.[column - 1],
        universe[row - 1]?.[column],
        universe[row - 1]?.[column + 1],
        universe[row][column - 1],
        universe[row][column + 1],
        universe[row + 1]?.[column - 1],
        universe[row + 1]?.[column],
        universe[row + 1]?.[column + 1]
    ]; 
    return neighbours.filter(x => !!x ).length;
}