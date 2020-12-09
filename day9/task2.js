const FileSystem = require("fs");

let input = FileSystem.readFileSync("./input.txt", "utf-8");
let numbers = input
  .split("\n")
  .filter(x => x !== "")
  .map(n => parseInt(n));

const isValid = (array, value) => array.some(a => array.includes(value - a));

let invalid = 0;
let i;

for (i = 25; i < numbers.length; i++) {
  if (!isValid(numbers.slice(i - 25, i), numbers[i])) {
    invalid = numbers[i];
    break;
  }
}

let contiguous = findContiguous(invalid, numbers.slice(0, i));

console.log(Math.min(...contiguous) + Math.max(...contiguous));

function findContiguous(value, array) {
  let sum = 0;

  for (let j = 0; j < array.length; j++) {
    for (let k = j + 1; k < array.length; k++) {
      sum = array.slice(j, k).reduce((a, b) => a + b);

      if (sum === value) {
        return array.slice(j, k);
      }
    }
  }
}
