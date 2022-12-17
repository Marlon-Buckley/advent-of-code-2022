const fs = require('fs');

const input = fs.readFileSync('./input.txt', 'utf-8');
const splitInput = input.split(/\r?\n/); 

const findItemCode = (item) => {
  if (item.charCodeAt() >= 97) {
    return item.charCodeAt() - 96
  } else {
    return item.charCodeAt() - 38;
  }
};

const part1 = (splitInput) => {
  let result = 0;

  splitInput.forEach((line) => {
    let halfWay = line.length / 2;
    let firstSet = [...new Set(line.slice(0, halfWay).split(''))];
    let secondSet = [...new Set(line.slice(halfWay).split(''))];
  
    firstSet.forEach((item) => {
      if (secondSet.includes(item)) {
        result += findItemCode(item);
      }
    })
  })
  return result;
};


const part2 = (splitInput) => {
  let backpacks = [];
  let result = 0;

  while(splitInput.length > 0) {
    backpacks.push(splitInput.splice(0, 3))
  }

  backpacks.forEach((backpack) => {
    let firstSet = [...new Set(backpack[0].split(''))];
    let secondSet = [...new Set(backpack[1].split(''))];
    let thirdSet = [...new Set(backpack[2].split(''))];

    firstSet.forEach((item) => {
      if (secondSet.includes(item) && thirdSet.includes(item)) {
        result += findItemCode(item);
      }
    })
  })

  return result;
}

console.log(part1(splitInput));
console.log(part2(splitInput));