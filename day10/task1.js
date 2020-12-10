const FileSystem = require("fs");

let input = FileSystem.readFileSync("./input.txt", "utf-8");
let adapters = input
  .split("\n")
  .filter(x => x !== "")
  .map(x => parseInt(x))
  .sort((a, b) => a - b);

let oneDiff = 0;
let threeDiff = 0;

adapters.unshift(0);
adapters.push(Math.max(...adapters) + 3);

let i;
for (i = 0; i < adapters.length; i++) {
  let diff = adapters[i + 1] - adapters[i];
  if (diff === 1) {
    oneDiff += 1;
  }
  if (diff === 3) {
    threeDiff += 1;
  }
}

console.log(oneDiff * threeDiff);
