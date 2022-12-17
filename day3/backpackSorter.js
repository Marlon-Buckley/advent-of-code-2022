const fs = require('fs');

//splits each line of input into an string
const input = fs.readFileSync('./input.txt', 'utf-8');
const splitInput = input.split(/\r?\n/); 

//for each line, split in half 
  //for each half find the chars that appears in both
    //assign that char a number, a-z 1-26 & A-Z 27-52
  
//tally up the total for all the numbers calculated from each line

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

console.log(part1(splitInput));

const commonItem = (backpack1, backpack2, backpack3) => {
  commonChar = '';

  return commonChar;
}

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


  console.log(backpacks);
  return result;
}

console.log(part2(splitInput));





  // let chunkSize = 3;
  // let groups = [];
  // let uniqueBackPacks = [];
  // let result = 0;

  // while (splitInput.length > 0) {
  //   groups.push(splitInput.splice(0, chunkSize));
  // }

  // groups.forEach((group) => {
  //   group.forEach((line) => {
  //     uniqueBackPacks.push([...new Set(line)]); 
  //   })
  // })
