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

const losingMoves = {
  'Rock': 'Paper',
  'Paper': 'Scissors',
  'Scissors': 'Rock'
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

    if (elfMove === myMove) {
      myScore += scores['Draw'];
      myScore += scores[myMove];
    } else if (winningMoves[elfMove] === myMove) {
      myScore += scores[myMove];
    } else {
      myScore += scores['Win'];
      myScore += scores[myMove];
    }
  });

 return myScore;
};

const part2 = (sortedInput) => {
  let myScore = 0;
  sortedInput.forEach((pairOfMoves) => {
    let elfMove = moves[pairOfMoves[0]];
    let result = partTwoMoves[pairOfMoves[1]];
    let myMove;
        
    if (result === 'Draw') {
      myMove = elfMove;
      myScore += scores['Draw'];
      myScore += scores[myMove];
    } else if (result === 'Lose') {
      myMove = winningMoves[elfMove];
      myScore += scores[myMove];
    } else if (result === 'Win') {
      myMove = losingMoves[elfMove];
      myScore += scores['Win'];
      myScore += scores[myMove];
    }
  });

 return myScore;
};

// console.log(part1(sortedInput));
console.log(part2(sortedInput));