import { nextDay, numberOfLiveNeighbours } from "./mobGameOfLife";

describe('Life', () => {

    it('should stay dead when dead', () => {
        // given
        const universe = [
            [false, false, false],
            [false, false, false],
        ];
        // when
        const nextUniverse = nextDay(universe);
        // then
        expect(nextUniverse).toEqual(universe);
    });

    it('a single alive cell should be dead the next day', () => {
        // given
        const universe = [
            [false, false, false],
            [false, true, false],
            [false, false, false],
        ];
        // when
        const nextUniverse = nextDay(universe);
        // then
        expect(nextUniverse).toEqual([
            [false, false, false],
            [false, false, false],
            [false, false, false],
        ]);
    });

    it('a dead cell with exactly three live neighbours becomes a live cell, as if by reproduction', () => {
        // given
        const universe = [
            [true, true, true, false],
            [false, false, false, false],
            [false, false, false, false],
            [false, false, false, false],
        ];
        // when
        const nextUniverse = nextDay(universe);
        // then
        expect(nextUniverse[1][1]).toBe(true);
        expect(nextUniverse[2][2]).toBe(false);
    });

    it('a live cell with more than three live neighbours dies, as if by overcrowding', () => {
        // given
        const universe = [
            [true, true, true, false],
            [true, true, false, false],
            [false, false, false, false],
            [false, false, false, false],
        ];
        // when
        const nextUniverse = nextDay(universe);
        // then
        expect(nextUniverse[1][1]).toBe(false);
        expect(nextUniverse[2][2]).toBe(false);
    });
    it('a live cell with two or three live neighbours lives on to the next generation', () => {
        // given
        const universe = [
            [true, true, true, false],
            [false, false, false, false],
            [false, false, false, false],
            [false, false, false, false],
        ];
        // when
        const nextUniverse = nextDay(universe);
        // then
        expect(nextUniverse[0][1]).toBe(true);
        expect(nextUniverse[1][2]).toBe(false);
    });

    it('a live cell with two or three live neighbours lives on to the next generation', () => {
        // given
        const universe = [
            [true, true, false, false],
            [true, true, false, false],
            [false, false, false, false],
            [false, false, false, false],
        ];
        // when
        const nextUniverse = nextDay(universe);
        // then
        expect(nextUniverse).toEqual(universe);
    });
    it('a live cell with fewer than two live neighbours dies, as if caused by under-population', () => {
        // given
        const universe = [
            [true, true, false, false],
            [false, false, false, false],
            [false, false, false, false],
            [false, false, false, false],
        ];
        // when
        const nextUniverse = nextDay(universe);
        // then
        expect(nextUniverse[0][0]).toBe(false);
        expect(nextUniverse[0][1]).toBe(false);

    });
})

describe('Neighbours', () => {
    it('a dead cell with exactly three live neighbours becomes a live cell, as if by reproduction', () => {
        // given
        const universe = [
            [true, true, true, false],
            [false, false, false, false],
            [false, false, false, false],
            [false, false, false, false],
        ];
        // when
        const liveNeighboursNumber = numberOfLiveNeighbours(universe, 1, 1);
        // then
        expect(liveNeighboursNumber).toBe(3);
    });
    it('a dead cell in a corner with exactly three live neighbours becomes a live cell, as if by reproduction', () => {
        // given
        const universe = [
            [true, true, false, false],
            [false, true, false, false],
            [false, false, false, false],
            [false, false, false, false],
        ];
        // when
        const liveNeighboursNumber = numberOfLiveNeighbours(universe, 1, 0);
        // then
        expect(liveNeighboursNumber).toBe(3);
    });
    it('a dead cell with two corner with exactly three live neighbours becomes a live cell, as if by reproduction', () => {
        // given
        const universe = [
            [false, true, false, false],
            [true, true, false, false],
            [false, false, true, true],
            [false, false, true, false],
        ];
        // when
        const liveNeighboursNumber = numberOfLiveNeighbours(universe, 3, 3);
        // then
        expect(liveNeighboursNumber).toBe(3);
    });
});

