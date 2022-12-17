const fs = require('fs');

const input = fs.readFileSync('./input.txt', 'utf-8');
const splitInput = input.split(/\r?\n/); 


const rangeGenerator = (start, end) => {
  return Array(end - start + 1).fill().map((_, idx) => start + idx)
};


const rangePuller = (splitInput) => {
  let pairs = [];
  splitInput.forEach((rangePair) => {
    let workingRange = [];
    let splitPair = rangePair.split(',');
    splitPair.forEach((range) => {
      let rangeNumbers = range.split('-');
      let testArr = rangeNumbers.map(str => {
        return Number(str);
      });
      workingRange.push(testArr);
    })
    pairs.push(workingRange);
  })
  
  return pairs
};


const compareRanges = (rangePairs) => {
  let matchCount = 0;

  rangePairs.forEach((pair) => {
    //console.log(pair);
    let firstRange = rangeGenerator(pair[0][0], pair[0][1])
    let secondRange = rangeGenerator(pair[1][0], pair[1][1])
    //console.log(firstRange, secondRange);
    if (secondRange.every(element => firstRange.includes(element))) {
      console.log('match found for', 'first range', firstRange, 'second range', secondRange);
      matchCount ++
    }
    else if (firstRange.every(element => secondRange.includes(element))) {
      console.log('match found', 'first range', firstRange, "\n", 'second range', secondRange);
      matchCount ++
    }
  })

  return `There are ${matchCount} ranges that fully contain another`
}

const rangePairs = rangePuller(splitInput);

console.log(compareRanges(rangePairs));