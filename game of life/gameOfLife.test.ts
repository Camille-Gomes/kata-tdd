const { create2DArray, countNeighbors, nextGeneration } = require('./gameOfLife');

describe('game of life', () => {
    it.skip('should return a 2d Array', () => {
        //given
        const rows = 5;
        const cols = 5;

        //when
        const array = create2DArray(cols, rows)

        //then
        expect(array.length).toEqual(5); 
    })
    it('should return the correct number of neighbors', () => {
        //given
        const game = [
            [0,0,0,0,0],
            [0,1,0,1,0],
            [0,0,1,0,0],
            [0,0,1,0,0],
            [0,0,0,0,0]
        ]
        
        //when
        const count = countNeighbors(game, 2, 2)
        //then
        expect(count).toEqual(3);
    })
    it('should becomes a live cell when a dead cell have exactly three live neighbours, as if by reproduction.', () => {
        //given
        const game = [
            [0,0,0,0,0],
            [0,0,1,1,0],
            [0,0,1,0,0],
            [0,0,0,0,0],
            [0,0,0,0,0]
        ]
        //when
        const next = nextGeneration(game, 3, 3)
        //then
        expect(next).toEqual([
            [0,0,0,0,0],
            [0,0,1,1,0],
            [0,0,1,1,0],
            [0,0,0,0,0],
            [0,0,0,0,0]
        ]);
    })
    it('should becomes a dead cell when a live cell have fewer than two live neighbours, as if caused by under-population.', () => {
        //given
        const game = [
            [0,0,0,0,0],
            [0,1,0,0,0],
            [0,0,0,0,0],
            [0,0,0,0,0],
            [0,0,0,0,0]
        ]
        //when
        const next = nextGeneration(game, 3, 3)
        //then
        expect(next).toEqual([
            [0,0,0,0,0],
            [0,0,0,0,0],
            [0,0,0,0,0],
            [0,0,0,0,0],
            [0,0,0,0,0]
        ]);
    })
    it('should lives on when a live cell have two or three live neighbours, as if caused by under-population.', () => {
        //given
        const game = [
            [0,0,0,0,0],
            [0,1,0,1,0],
            [0,0,1,0,0],
            [0,1,0,0,0],
            [0,0,0,0,0]
        ]
   
        //when
        const next = nextGeneration(game, 3, 3)

        //then
        expect(next).toEqual(game);
    })
    it('should becomes a dead cell when a live cell have more than three live neighbours, as if by overcrowding.', () => {
        //given
        const game = [
            [0,0,0,0,0],
            [0,1,1,1,0],
            [0,1,1,0,0],
            [0,0,0,0,0],
            [0,0,0,0,0]
        ]
        //when
        const next = nextGeneration(game, 3, 3)
        //then
        expect(next).toEqual([
            [0,0,0,0,0],
            [0,1,0,0,0],
            [0,1,1,0,0],
            [0,0,0,0,0],
            [0,0,0,0,0]
        ]);
    })

  });
