const fs = require("fs");

const input = fs.readFileSync("./example.txt", "utf-8");
const splitInput = input.split(/\n/);

let split = [];
let columnCount = 0;

// how do I know number of columns?
// by the numbers at the bottom of the stacks
// so lets grab that line, split to an array
// then slice the last two elemnts, and grab the first
// now we have the column count

splitInput.forEach((line) => {
  if (line.startsWith(" 1")) {
    columnCount = line.split(" ").slice(-2)[0];
  }
  split.push(line);
});

console.log(columnCount);
console.log(split);
