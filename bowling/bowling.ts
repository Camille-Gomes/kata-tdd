export const getScore = (bowlingGame) => {
    let game = []
    let frames: number = 0

   for (var i = 0; i < 10; i++) {
       frames = bowlingGame[i].frameOne + bowlingGame[i].frameTwo
        
       if(frames === 10) {
            if(i < bowlingGame.length - 1) {
                frames += bowlingGame[i + 1].frameOne 
            }
        }
       
       if(bowlingGame[i].frameOne === 10 && bowlingGame[i].frameTwo === 0) {
            frames = bowlingGame[i].frameOne ;
           
           if(i < bowlingGame.length - 1) {
                frames += bowlingGame[i + 1].frameOne + bowlingGame[i + 1].frameTwo
           }

           if(i < bowlingGame.length - 2) {
                frames += bowlingGame[i + 2].frameOne + bowlingGame[i + 2].frameTwo
            }
       }
       
        game.push(frames)
    }

   const sumScore = game.reduce(function(prev, cur){
        return prev + cur;
    }, 0);

   return sumScore
}
