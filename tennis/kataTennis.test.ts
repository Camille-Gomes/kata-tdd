const { getPoint, getScore } = require('./kataTennis');

describe('score tennis', () => {

    it('should return correct point', async () => {
      // given
      const point0 = 0
      const point1 = 1
      const point2 = 2
      const point3 = 3
      // when
      const score0 = getPoint(point0)
      const score1 = getPoint(point1)
      const score2 = getPoint(point2)
      const score3 = getPoint(point3)
      // then
      expect(score0).toBe('0');
      expect(score1).toBe('15');
      expect(score2).toBe('30');
      expect(score3).toBe('40');
    });
    it('should return correct score', async () => {
        // given
        const playerOne = 0
        const playerTwo = 1
        // when
        const score = getScore(playerOne, playerTwo)
        // then
        expect(score).toBe('0-15');
    });

    it('should return Deuce when the score is = ', async () => {
        // given
        const playerOne = 1
        const playerTwo = 1
        // when
        const score = getScore(playerOne, playerTwo)
        // then
        expect(score).toBe('Deuce');
    });

    it('should return Advantage when the score is 40-40 and someone score ', async () => {
        // given
        const playerOne = 3
        const playerTwo = 4
        // when
        const score = getScore(playerOne, playerTwo)
        // then
        expect(score).toBe('Advantage');
    });

    it('should return Win when point is score by player with advantage', async () => {
        // given
        const playerOne = 3
        const playerTwo = 5
        // when
        const score = getScore(playerOne, playerTwo)
        // then
        expect(score).toBe('Win');
    });

  });