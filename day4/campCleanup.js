const fs = require("fs");

const input = fs.readFileSync("./input.txt", "utf-8");
const splitInput = input.split(/\r?\n/);

const createRangesFromArray = (start, end) => {
  return Array(end - start + 1)
    .fill()
    .map((_, idx) => start + idx);
};

const convertInputToArrayOfNumberPairs = (splitInput) => {
  let pairs = [];
  splitInput.forEach((rangePair) => {
    let workingRange = [];
    let splitPair = rangePair.split(",");
    splitPair.forEach((range) => {
      let rangeNumbers = range.split("-");
      let testArr = rangeNumbers.map((str) => {
        return Number(str);
      });
      workingRange.push(testArr);
    });
    pairs.push(workingRange);
  });

  return pairs;
};

const part1 = (rangePairs) => {
  let matchCount = 0;
  rangePairs.forEach((pair) => {
    let firstRange = createRangesFromArray(pair[0][0], pair[0][1]);
    let secondRange = createRangesFromArray(pair[1][0], pair[1][1]);

    if (secondRange.every((element) => firstRange.includes(element))) {
      matchCount++;
    } else if (firstRange.every((element) => secondRange.includes(element))) {
      matchCount++;
    }
  });

  return `There are ${matchCount} ranges that fully contain another`;
};

const rangePairs = convertInputToArrayOfNumberPairs(splitInput);

const part2 = (inputPairs) => {
  let count = 0;

  inputPairs.forEach((pair) => {
    const firstRange = createRangesFromArray(pair[0][0], pair[0][1]);
    const secondRange = createRangesFromArray(pair[1][0], pair[1][1]);
    if (firstRange.some((item) => secondRange.includes(item))) {
      count++;
    }
  });

  return count;
};

console.log(part2(rangePairs));
// console.log(part1(rangePairs));
