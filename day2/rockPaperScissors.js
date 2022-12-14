const fs = require('fs');

//splits each line of input into an string
const input = fs.readFileSync('./example.txt', 'utf-8');
const splitInput = input.split(/\r?\n/); 

//removes the empty space from each line
//returning a new 2d array of every move combo
const sortedInput = splitInput.map(element => { 
  return element.split(' ');
});


//Moves
//A & X = Rock
//B & Y = Paper
//C & Z = Scissors

//Scores
//Rock = 1
//Paper = 2
//Scissors = 3

//Loss = 0
//Draw = 3
//Win = 6

const moves = {
  'A': 'Rock',
  'X': 'Rock',
  'B': 'Paper',
  'Y': 'Paper',
  'C': 'Scissors',
  'Z': 'Scissors'
}

const winningMoves = {
  'Paper': 'Rock',
  'Scissors': 'Paper',
  'Rock': 'Scissors'
};




console.log(splitInput);
console.log(sortedInput);