const FileSystem = require("fs");

let input = FileSystem.readFileSync("./input.txt", "utf-8");
let rules = input.split("\n");

let containers = {};

for (let i = 0; i < rules.length; i++) {
  if (rules[i] === "") break;
  let split = rules[i].split("contain");
  let bigBag = split[0].trim().slice(0, -1);

  let bags = split[1].replace(".", "").split(",");

  containers[bigBag] = {};

  bags.forEach(b => {
    if (b.includes("no other bags")) {
      containers[bigBag]["no other bags"] = 0;
    } else {
      let amount = parseInt(b.slice(0, 2));
      let bagName = b.slice(2, b.length).trim();

      if (amount > 1) {
        bagName = bagName.slice(0, -1);
      }

      containers[bigBag][bagName] = amount;
    }
  });
}

console.log(countBags("shiny gold bag"));

function countBags(bag) {
  const root = containers[bag];

  if (!root) return 0;

  return Object.keys(root).reduce(
    (count, child) => count + root[child] + root[child] * countBags(child),
    0
  );
}
