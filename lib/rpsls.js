function getRandomChoice(choices) {
    return choices[Math.floor(Math.random() * choices.length)]
}

function playGame(player, choices) {
    player = player.toLowerCase()
    if (!choices.includes(player)) {
        throw new RangeError();
    }
    
    const opponent = getRandomChoice(choices);
    let result;

    if (player == 'rock') {
        if (opponent == 'rock') {result = 'tie'};
        if (opponent == 'paper') {result = 'lose'};
        if (opponent == 'scissors') {result = 'win'};
        if (opponent == 'lizard') {result = 'win'};
        if (opponent == 'spock') {result = 'lose'};
      }
      if (player == 'paper') {
        if (opponent == 'rock') {result = 'win'};
        if (opponent == 'paper') {result = 'tie'};
        if (opponent == 'scissors') {result = 'lose'};
        if (opponent == 'lizard') {result = 'lose'};
        if (opponent == 'spock') {result = 'win'};
      }
      if (player == 'scissors') {
        if (opponent == 'rock') {result = 'lose'};
        if (opponent == 'paper') {result = 'win'};
        if (opponent == 'scissors') {result = 'tie'};
        if (opponent == 'lizard') {result = 'win'};
        if (opponent == 'spock') {result = 'lose'};
      }
      if (player == 'lizard') {
        if (opponent == 'rock') {result = 'lose'};
        if (opponent == 'paper') {result = 'win'};
        if (opponent == 'scissors') {result = 'lose'};
        if (opponent == 'lizard') {result = 'tie'};
        if (opponent == 'spock') {result = 'win'};
      }
      if (player == 'spock') {
        if (opponent == 'rock') {result = 'win'};
        if (opponent == 'paper') {result = 'lose'};
        if (opponent == 'scissors') {result = 'win'};
        if (opponent == 'lizard') {result = 'lose'};
        if (opponent == 'spock') {result = 'tie'};
      }
    
    return {
        player: player,
        opponent: opponent,
        result: result
    }
}

export function RPS(choice) {
    const choices = ['rock', 'paper', 'scissors'];
    if (!choice) {
        return {
            player: getRandomChoice(choices)
        };
    }
    return playGame(choice, choices);
}

export function RPSLS(choice) {
    const choices = ['rock', 'paper', 'scissors', 'lizard', 'spock'];
    if (!choice) {
        return {
            player: getRandomChoice(choices)
        };
    }
    return playGame(choice, choices);
}