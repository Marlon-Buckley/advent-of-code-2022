import { readFileSync } from "fs";
const input = readFileSync("./input.txt", "utf-8");
const splitInput = input.split(/\n/);

let rows = [];
let columnCount = 0;
let moves = [];

splitInput.forEach((line) => {
  if (line.startsWith(" 1")) {
    columnCount = line.split(" ").slice(-2)[0];
  } else if (line.includes("[")) {
    rows.push(line);
  } else if (line.startsWith("move")) {
    moves.push(line);
  }
});

let start = 0;
let end = 3;
let crates = {};

//populate the crates object
for (let i = 0; i < columnCount; i++) {
  const column = rows.map((line) => line.slice(start, end).trim());
  const tidyColumn = column.filter((crate) => crate);
  crates[i + 1] = tidyColumn;
  start += 4;
  end += 4;
}

// console.log("crates start out like", JSON.stringify(crates, undefined, 2));

for (let i = 0; i < moves.length; i++) {
  const instructions = moves[i].match(/\d+/g);

  const numCratesToMove = instructions[0];
  const stackToTakeFrom = instructions[1];
  const stackToMoveTo = instructions[2];
  const crateToMove = crates[stackToTakeFrom].splice(0, numCratesToMove);

  crateToMove.forEach((thing) => {
    crates[stackToMoveTo].unshift(thing);
  });

  console.log("crates now like: ", JSON.stringify(crates, undefined, 2));
}

for (const column in crates) {
  console.log(crates[column][0]);
}
