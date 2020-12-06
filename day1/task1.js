const FileSystem = require("fs");

let input = FileSystem.readFileSync("./input.txt", "utf-8");
let array = input.split("\n").map(n => parseInt(n));

array.forEach(a => {
  array.forEach(b => {
    if (a + b === 2020) console.log(a * b);
  });
});
