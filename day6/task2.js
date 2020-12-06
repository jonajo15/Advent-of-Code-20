const FileSystem = require("fs");

let input = FileSystem.readFileSync("./input.txt", "utf-8");
let groups = input.split("\n");

let groupAnswers = {};

let count = 0;
let groupMembers = 0;

for (let i = 0; i < groups.length; i++) {
  // process group
  if (groups[i] === "") {
    Object.values(groupAnswers).forEach(ga => {
      if (ga === groupMembers) {
        count += 1;
      }
    });

    groupAnswers = {};
    groupMembers = 0;
  } else {
    let answers = [...groups[i]];
    groupMembers += 1;

    answers.forEach(a => {
      if (groupAnswers[a]) {
        groupAnswers[a] += 1;
      } else {
        groupAnswers[a] = 1;
      }
    });
  }
}

console.log(count);
