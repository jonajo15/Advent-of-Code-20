const FileSystem = require("fs");

let input = FileSystem.readFileSync("./input.txt", "utf-8");
let groups = input.split("\n");

let groupUnique = new Set();

let nrOfAnswers = 0;

for (let i = 0; i < groups.length; i++) {
  // process group
  if (groups[i] === "") {
    nrOfAnswers += groupUnique.size;
    groupUnique = new Set();
  } else {
    let answers = [...groups[i]];

    answers.forEach(a => groupUnique.add(a));
  }
}

console.log(nrOfAnswers);
