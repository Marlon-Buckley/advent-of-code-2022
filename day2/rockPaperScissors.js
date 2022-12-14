const fs = require('fs');

//splits each line of input into an string
const input = fs.readFileSync('./input.txt', 'utf-8');
const splitInput = input.split(/\r?\n/); 

//removes the empty space from each line
//returning a new 2d array of every move combo
const sortedInput = splitInput.map(element => { 
  return element.split(' ');
});

const moves = {
  'A': 'Rock',
  'X': 'Rock',
  'B': 'Paper',
  'Y': 'Paper',
  'C': 'Scissors',
  'Z': 'Scissors'
}

const partTwoMoves = {
  'X': 'Lose',
  'Y': 'Draw',
  'Z': 'Win',
}
const winningMoves = {
  'Paper': 'Rock',
  'Scissors': 'Paper',
  'Rock': 'Scissors'
};

const scores = {
  'Rock': 1,
  'Paper': 2,
  'Scissors': 3,
  'Loss': 0,
  'Draw': 3,
  'Win': 6
}

const part1 = (sortedInput) => {
  let myScore = 0;
  sortedInput.forEach((pairOfMoves) => {
    let elfMove = moves[pairOfMoves[0]];
    let myMove = moves[pairOfMoves[1]];
    // console.log('score is currently:', myScore);
    // console.log('elf played, ', elfMove, 'I played ', myMove );
    if (elfMove === myMove) {
      // console.log('draw');
      myScore += scores['Draw'];
      myScore += scores[myMove];
      // console.log('draw', myScore);
    } else if (winningMoves[elfMove] === myMove) {
      // console.log('elf wins');
      myScore += scores[myMove];
    } else {
      // console.log('I win');
      myScore += scores['Win'];
      myScore += scores[myMove];
    }
  });

 return myScore;
};

// console.log(part1(sortedInput));

