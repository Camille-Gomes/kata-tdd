const {point, getScore, matchPoint} = require('./tennis');

describe('score tennis', () => {

    it('should return correct score when given point', async () => {
      // given
      const point0 = 0
      const point1 = 1
      const point2 = 2
      const point3 = 3
      const point4 = 4
      // when
      const score0 = point(point0)
      const score1 = point(point1)
      const score2 = point(point2)
      const score3 = point(point3)
      const score4 = point(point4)
      // then
      expect(score0).toBe('Love');
      expect(score1).toBe('15');
      expect(score2).toBe('30');
      expect(score3).toBe('40');
      expect(score4).toBe('Win');
    });
    it('should return point when player score', async () => {
      // given
      const playerOneScore = true
      const playerTwoScore = false
  
      // when
      const score = matchPoint(playerOneScore, playerTwoScore)
      // then
      expect(score).toStrictEqual([1, 0]);
    });
  
    it('should return correct score for a match', async () => {
      // given
      const pointPlayerOne = 1
      const pointPlayerTwo = 0
     
      const scorePlayerOne = point(pointPlayerOne)
      const scorePlayerTwo = point(pointPlayerTwo)
  
      // when
      const score = getScore(scorePlayerOne, scorePlayerTwo)
      // then
      expect(score).toBe('15 - Love');
    });
    it('should return deuce when players have the same point', async () => {
      // given
      const pointPlayerOne = 1
      const pointPlayerTwo = 1
     
      const scorePlayerOne = point(pointPlayerOne)
      const scorePlayerTwo = point(pointPlayerTwo)
  
      // when
      const score = matchPoint(scorePlayerOne, scorePlayerTwo)
      // then
      expect(score).toBe('Deuce');
    });
    it.skip('should return AV when score is 40 - 40 and one take advantage ', async () => {
      // given
      const pointPlayerOne = 3
      const pointPlayerTwo = 3
     
      const scorePlayerOne = point(pointPlayerOne)
      const scorePlayerTwo = point(pointPlayerTwo)
  
      // when
      const score = matchPoint(scorePlayerOne, scorePlayerTwo)
      // then
      expect(score).toBe('AV');
    });
  });