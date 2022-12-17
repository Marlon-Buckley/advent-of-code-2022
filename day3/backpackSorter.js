const fs = require('fs');

//splits each line of input into an string
const input = fs.readFileSync('./input.txt', 'utf-8');
const splitInput = input.split(/\r?\n/); 

//console.log(splitInput);

//for each line, split in half 
  //for each half find the chars that appears in both
    //assign that char a number, a-z 1-26 & A-Z 27-52
  
//tally up the total for all the numbers calculated from each line

let result = 0;

splitInput.forEach((line) => {
  let halfWay = line.length / 2;

  let firstSet = [...new Set(line.slice(0, halfWay).split(''))];
  let secondSet = [...new Set(line.slice(halfWay).split(''))];

  firstSet.forEach((item) => {
    if (secondSet.includes(item)) {
      console.log('found a match', item);
      if (item.charCodeAt() >= 97) { //if item lowerCasee
        //matches.push(item.charCodeAt() - 96);
        result += item.charCodeAt() - 96
      } else if (item.charCodeAt() <= 90) { //item is upperCase
        //matches.push(item.charCodeAt() - 38);
        result += item.charCodeAt() - 38

      }

      
    }
  })

})

console.log(result);

