const fs = require('fs');

//splits each line of input into an string
const input = fs.readFileSync('./example.txt', 'utf-8');
const splitInput = input.split(/\r?\n/); 

console.log(splitInput);

//for each line, split in half 
  //for each half find the chars that appears in both
    //assign that char a number, a-z 1-26 & A-Z 27-52
  
//tally up the total for all the numbers calculated from each line

splitInput.forEach((line) => {
  let halfWay = line.length / 2;
  let firstHalf = line.slice(0, halfWay);
  let secondHalf = line.slice(halfWay);
  console.log(firstHalf + " " + secondHalf);
})