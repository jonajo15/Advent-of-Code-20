const FileSystem = require("fs");

let input = FileSystem.readFileSync("./input.txt", "utf-8");
let array = input.split("\n");

let pwCount = 0;

array.forEach(row => {
  if (row === "") return;

  const split = row.split(":");
  let pw = [...split[1].trim()];
  const pt2 = split[0].split(" ");
  const letter = pt2[1];
  const limit = pt2[0].split("-");
  let subCount = 0;

  pw.forEach(l => {
    if (l === letter) {
      subCount += 1;
    }
  });

  if (limit[0] <= subCount && subCount <= limit[1]) pwCount += 1;
});

console.log(pwCount);
