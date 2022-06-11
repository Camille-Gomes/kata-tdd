export const point = (score: Number) => {
  switch (score) {
    case 0:
      return "Love";
    case 1:
      return "15";
    case 2:
      return "30";
    case 3:
      return "40";
    case 4:
      return "Win";
  }
}

export const matchPoint = (playerOneScore: any, playerTwoScore: any) => {
  const score = [0, 0]

  if(playerOneScore === true) {
    score[0]++
  } 

  if(playerTwoScore === true) {
    score[1]++
  }

  if(score[0] === score[1]) {
    if(score[0] > 2 && score[1] > 2) {
      return "AV"
    } else {
      return 'Deuce'
    }
  }

  return score
}

export const getScore = (scorePlayerOne: any, scorePlayerTwo: any) => {
  return `${scorePlayerOne} - ${scorePlayerTwo}`
};


//comptabiliser le nompre de point gagné
//