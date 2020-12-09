const FileSystem = require("fs");

let input = FileSystem.readFileSync("./input.txt", "utf-8");
let numbers = input
  .split("\n")
  .filter(x => x !== "")
  .map(n => parseInt(n));

const isValid = (array, value) => array.some(a => array.includes(value - a));

let i;
for (i = 25; i < numbers.length; i++) {
  if (!isValid(numbers.slice(i - 25, i), numbers[i])) {
    console.log(numbers[i]);
    break;
  }
}
