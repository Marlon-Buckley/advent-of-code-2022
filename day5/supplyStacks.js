const fs = require("fs");

const input = fs.readFileSync("./example.txt", "utf-8");
const splitInput = input.split(/\r?\n/);

console.log(splitInput);
