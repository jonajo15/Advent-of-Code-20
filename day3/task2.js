const FileSystem = require("fs");

let input = FileSystem.readFileSync("./input.txt", "utf-8");
let array = input.split("\n");

const consulations = [
  [3, 1],
  [1, 1],
  [5, 1],
  [7, 1],
  [1, 2]
];

let product = 1;

consulations.forEach(c => {
  let travers = [0, 0];
  let trees = 0;

  while (travers[1] < array.length - 1) {
    const row = array[travers[1]];
    const col = travers[0];

    if (row[col % row.length] === "#") {
      trees += 1;
    }

    travers[0] += c[0];
    travers[1] += c[1];
  }
  product *= trees;
});

console.log(product);
