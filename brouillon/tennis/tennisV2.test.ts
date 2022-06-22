const {getScoreV2} = require('./tennisV2');

describe('score tennis', () => {

    it('should return correct score', async () => {
      // given
      const playerOne = {
        score: "0",
        game: 0,
        set: 0
    }
      const playerTwo = {
        score: "15",
        game: 0,
        set: 0
    }
      // when
      const score = getScoreV2(playerOne, playerTwo)
      // then
      expect(score).toBe('Player 1 : 0 - 15 : Player 2');
    });

    it('should return AV when player get the advantage and the opponent point is 40', async () => {
        // given
        const playerOne = {
            score: "40",
            game: 0,
            set: 0
        }
        const playerTwo = {
            score: "AV",
            game: 1,
            set: 0
        }

        const playerThree = {
            score: "15",
            game: 1,
            set: 0
        }
        const playerFour = {
            score: "AV",
            game: 1,
            set: 0
        }
        // when
        const goodScore = getScoreV2(playerOne, playerTwo)
        const erreur = getScoreV2(playerThree, playerFour)
        // then
        expect(goodScore).toBe('Player 1 : _ - AV : Player 2');
        expect(erreur).toBe('Erreur');
      });

      it('should return number of game', async () => {
        // given
        const playerOne = {
            score: "0",
            game: 1,
            set: 0
        }
        const playerTwo = {
            score: "0",
            game: 0,
            set: 0
        }
        // when
        const score = getScoreV2(playerOne, playerTwo)
        // then
        expect(score).toBe('Player 1 : 1 - 0 : Player 2');
      });

      it.skip('should return number of set', async () => {
        // given
        const playerOne = {
            score: "0",
            game: 3,
            set: 2
        }
        const playerTwo = {
            score: "0",
            game: 4,
            set: 1
        }
        // when
        const score = getScoreV2(playerOne, playerTwo)
        // then
        expect(score).toBe('Player 1 : 2 - 1 : Player 2');
      });
  });