const FileSystem = require("fs");

let input = FileSystem.readFileSync("./input.txt", "utf-8");
let instructions = input
  .split("\n")
  .filter(x => x !== "")
  .map(x => x.split(" "));

let accumelator = 0;

let actionsPerformed = [];

let index = 0;

while (index < instructions.length) {
  // action visited
  if (actionsPerformed.includes(index)) {
    console.log(accumelator);
    break;
  }

  actionsPerformed.push(index);

  [index, accumelator] = run(instructions, index, accumelator);
}

function run(instructions, index, acc) {
  const action = instructions[index];
  switch (action[0]) {
    case "acc":
      acc += parseInt(action[1]);
      index++;
      break;
    case "jmp":
      index += parseInt(action[1]);
      break;
    default:
      index++;
      break;
  }
  return [index, acc];
}
