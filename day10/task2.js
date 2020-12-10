const FileSystem = require("fs");
const _ = require("lodash");

let input = FileSystem.readFileSync("./input.txt", "utf-8");
let adapters = input
  .split("\n")
  .filter(x => x !== "")
  .map(x => parseInt(x))
  .sort((a, b) => a - b);

adapters.unshift(0);
adapters.push(Math.max(...adapters) + 3);

const store = {};
const answer = run(0);

console.log(answer);

function run(i) {
  if (i === adapters.length - 1) {
    return 1;
  }

  if (i in store) {
    return store[i];
  }

  let ans = 0;
  for (let j of _.range(i + 1, adapters.length)) {
    if (adapters[j] - adapters[i] <= 3) {
      ans += run(j);
    }
  }

  store[i] = ans;

  return ans;
}
