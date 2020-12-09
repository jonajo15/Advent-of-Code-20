const FileSystem = require("fs");
const _ = require("lodash");

let input = FileSystem.readFileSync("./input.txt", "utf-8");
let instructions = input
  .split("\n")
  .filter(x => x !== "")
  .map(x => x.split(" "));

let mod = [];
let index = 0;

while (index < instructions.length) {
  mod = _.cloneDeep(instructions);

  // check action and change
  if (mod[index][0] === "nop") {
    mod[index][0] = "jmp";
  } else if (mod[index][0] === "jmp") {
    mod[index][0] = "nop";
  } else {
    index++;
    continue;
  }

  let accumelator = 0;
  let tries = 0;
  let i = 0;

  while (0 <= i && i < mod.length && tries < mod.length) {
    tries += 1;
    [i, accumelator] = run(mod, i, accumelator);
  }

  if (i === mod.length) {
    console.log(accumelator);
    break;
  }
  index++;
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
