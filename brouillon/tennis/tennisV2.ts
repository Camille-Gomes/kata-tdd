export const getScoreV2 = (playerOne: Player, playerTwo: Player) => {

    if(playerOne.score === "AV" && playerTwo.score !== "40") {
        return "Erreur";
    } 

    if(playerTwo.score === "AV" && playerOne.score !== "40") {
        return "Erreur";
    }

    if (playerOne.score === "AV" && playerTwo.score === "40"){
        return "Player 1 : " + playerOne.score + " - _ : Player 2";
    }
    
    if (playerTwo.score === "AV" && playerOne.score === "40"){
        return "Player 1 : _ - " + playerTwo.score + " : Player 2";
    }

    if (playerOne.game > 0 || playerTwo.game > 0) {
        return "Player 1 : " + playerOne.game + " - " + playerTwo.game + " : Player 2";
    }

    if (playerOne.set > 0 || playerTwo.set > 0) {
        return "Player 1 : " + playerOne.set + " - " + playerTwo.set + " : Player 2";
    }

    return "Player 1 : " + playerOne.score + " - " + playerTwo.score + " : Player 2";
}

export type Player = {
    score: string,
    game: number,
    set: number
}