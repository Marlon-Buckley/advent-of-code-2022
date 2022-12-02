const fs = require('fs');

const input = fs.readFileSync('./input.txt', 'utf-8');
const splitInput = input.split(/\r?\n/);


let listOfCalories = [];
let workingCalories = [];

for (let i = 0; i < splitInput.length; i++) {
  if (splitInput[i] != '') {
    workingCalories.push(Number(splitInput[i]));
    if (i === splitInput.length - 1) { //becuase the final element wasn't being added to the list
      listOfCalories.push(workingCalories);
    }
  }

  if (splitInput[i] === '') {
    listOfCalories.push(workingCalories);
    workingCalories = [];
  }
  
};


let maxCalories = 0;
let listOfAllCalorieSums = [];

listOfCalories.forEach((list) => {
  let currentSum = list.reduce((accumulator, value) => {
    return accumulator + value;
  }, 0);

  listOfAllCalorieSums.push(currentSum);

  if (currentSum > maxCalories) {
    maxCalories = currentSum;
  }
});

listOfAllCalorieSums.sort(function(a, b) {
  return b - a;
});

const threeHighestCals = 
listOfAllCalorieSums.slice(0, 3).reduce((accumulator, value) => {
  return accumulator + value;
}, 0);

console.log(maxCalories);
console.log(threeHighestCals);
