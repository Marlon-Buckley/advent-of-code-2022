import { readFileSync } from "fs";
const input = readFileSync("./input.txt", "utf-8");
const splitInput = input.split(/\n/);

const parseInputIntoUsefulThing = (input) => {
  let rows = [];
  let stackCount = 0;
  let moves = [];

  input.forEach((line) => {
    if (line.startsWith(" 1")) {
      stackCount = line.split(" ").slice(-2)[0];
    } else if (line.includes("[")) {
      rows.push(line);
    } else if (line.startsWith("move")) {
      moves.push(line);
    }
  });

  return { rows, stackCount, moves };
};

const buildCratesObject = (rows, stackCount) => {
  let start = 0;
  let end = 3;
  let crates = {};

  for (let i = 0; i < stackCount; i++) {
    const column = rows.map((line) => line.slice(start, end).trim());
    const tidyColumn = column.filter((crate) => crate);
    crates[i + 1] = tidyColumn;
    start += 4;
    end += 4;
  }

  return crates;
};

const moveTheCrates = (crates, moves) => {
  for (let i = 0; i < moves.length; i++) {
    const instructions = moves[i].match(/\d+/g);

    const numCratesToMove = instructions[0];
    const stackToTakeFrom = instructions[1];
    const stackToMoveTo = instructions[2];
    const cratesToMove = crates[stackToTakeFrom].splice(0, numCratesToMove);

    cratesToMove.forEach((crate) => {
      crates[stackToMoveTo].unshift(crate);
    });
  }
};

const { rows, stackCount, moves } = parseInputIntoUsefulThing(splitInput);
const crates = buildCratesObject(rows, stackCount);

moveTheCrates(crates, moves);

for (const column in crates) {
  console.log(crates[column][0]);
}
