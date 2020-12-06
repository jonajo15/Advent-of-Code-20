const FileSystem = require("fs");

let input = FileSystem.readFileSync("./input.txt", "utf-8");
let array = input.split("\n");

let travers = [0, 0];
let trees = 0;

while (travers[1] < array.length - 1) {
  const row = array[travers[1]];
  const col = travers[0];

  if (row[col % row.length] === "#") {
    trees += 1;
  }

  travers[0] += 3;
  travers[1] += 1;
}

console.log(trees);
