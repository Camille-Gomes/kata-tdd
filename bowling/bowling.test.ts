const { getScore } = require('./bowling');

describe('score bowling', () => {
    it('should return 0 for a game of all zeros', () => {
        //given
        const bowlingGame = [
            { frameOne: 0, frameTwo: 0},
            { frameOne: 0, frameTwo: 0},
            { frameOne: 0, frameTwo: 0},
            { frameOne: 0, frameTwo: 0},
            { frameOne: 0, frameTwo: 0},
            { frameOne: 0, frameTwo: 0},
            { frameOne: 0, frameTwo: 0},
            { frameOne: 0, frameTwo: 0},
            { frameOne: 0, frameTwo: 0},
            { frameOne: 0, frameTwo: 0},
        ]
        //when
        const score = getScore(bowlingGame)

        //then
        expect(score).toEqual(0); 
    })
    it('should return 150 for a game of all spare', () => {
        //given
        const bowlingGame = [
            { frameOne: 5, frameTwo: 5},
            { frameOne: 5, frameTwo: 5},
            { frameOne: 5, frameTwo: 5},
            { frameOne: 5, frameTwo: 5},
            { frameOne: 5, frameTwo: 5},
            { frameOne: 5, frameTwo: 5},
            { frameOne: 5, frameTwo: 5},
            { frameOne: 5, frameTwo: 5},
            { frameOne: 5, frameTwo: 5},
            { frameOne: 5, frameTwo: 5},
            { frameOne: 5, frameTwo: 5},
        ]
        //when
        const score = getScore(bowlingGame)

        //then
        expect(score).toEqual(150); 
    })
    it('should return 300 for a game of all strike', () => {
        //given
        const bowlingGame = [
            { frameOne: 10, frameTwo: 0},
            { frameOne: 10, frameTwo: 0},
            { frameOne: 10, frameTwo: 0},
            { frameOne: 10, frameTwo: 0},
            { frameOne: 10, frameTwo: 0},
            { frameOne: 10, frameTwo: 0},
            { frameOne: 10, frameTwo: 0},
            { frameOne: 10, frameTwo: 0},
            { frameOne: 10, frameTwo: 0},
            { frameOne: 10, frameTwo: 0},
            { frameOne: 10, frameTwo: 0},
            { frameOne: 10, frameTwo: 0},
        ]
        //when
        const score = getScore(bowlingGame)

        //then
        expect(score).toEqual(300); 
    })
    it('should return correct score for a game', () => {
        //given
        const bowlingGame = [
            { frameOne: 3, frameTwo: 5},
            { frameOne: 10, frameTwo: 0},
            { frameOne: 5, frameTwo: 5},
            { frameOne: 3, frameTwo: 2},
            { frameOne: 5, frameTwo: 2},
            { frameOne: 10, frameTwo: 0},
            { frameOne: 7, frameTwo: 1},
            { frameOne: 5, frameTwo: 5},
            { frameOne: 0, frameTwo: 4},
            { frameOne: 9, frameTwo: 1},
            { frameOne: 3, frameTwo: 2},
        ]
        //when
        const score = getScore(bowlingGame)

        //then
        expect(score).toEqual(121); 
    })

  });
