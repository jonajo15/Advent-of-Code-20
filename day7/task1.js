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
      containers[bigBag]["no other bags"] = null;
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

let bagsWithGoldBag = new Set();

Object.keys(containers).forEach(bag => walk(bag, bag));

console.log(bagsWithGoldBag.size);

// dive into bags
function walk(bag, root) {
  // no other bags
  if (!containers[bag]) return;

  const children = Object.keys(containers[bag]);

  if (children.includes("shiny gold bag")) {
    bagsWithGoldBag.add(root);
    return;
  }

  children.forEach(child => walk(child, root));
}
