export const getPoint = (score: Number) => {
    switch (score) {
      case 0:
        return "0";
      case 1:
        return "15";
      case 2:
        return "30";
      case 3:
        return "40";
    }
  }

export const getScore = (playerOne : Number, playerTwo : Number) => {
    const playerOneScore = getPoint(playerOne)
    const playerTwoScore = getPoint(playerTwo)

    if(playerOne >= 5 || playerTwo >=5) {
        return 'Win'
    }

    if(playerOne >= 4 || playerTwo >= 4) {
        return 'Advantage'
    }

    if(playerOneScore === playerTwoScore) {
        return 'Deuce'
    }

    return `${playerOneScore}-${playerTwoScore}`
  }