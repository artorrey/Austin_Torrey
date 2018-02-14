var readlineSync = require('readline-sync');

var name = readlineSync.question("WHAT IS YOUR NAME?");
games = ['CHESS', 'HEARTS', 'CHECKERS', 'GLOBAL THERMONUCLEAR WAR']

if(readlineSync.keyInYN("HELLO " + name + ". SHALL WE PLAY A GAME?")) {
    index = readlineSync.keyInSelect(games, 'CHOOSE GAME');
} else {
    console.log("OKAY, MAYBE ANOTHER TIME.");
} if(games.length = 3) {
    console.log('A STRANGE GAME. THE ONLY WINNING MOVE IS NOT TO PLAY');
} else {
    console.log('NO THANKS');
    index = readlineSync.keyInSelect(games, 'CHOOSE GAME');
    
}
                                     

    
    