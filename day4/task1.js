const FileSystem = require("fs");

let input = FileSystem.readFileSync("./input.txt", "utf-8");
let passportInput = input.split("\n");

let travers = [0, 0];
let trees = 0;

let passport = {};

let allowed = {
  byr: true,
  iyr: true,
  eyr: true,
  hgt: true,
  hcl: true,
  ecl: true,
  pid: true
};

let approved = false;
let temp = [];

let passports = [];

for (let i = 0; i < passportInput.length; i++) {
  if (passportInput[i] === "") {
    temp = Object.keys(allowed).map(key => passport[key]);
    approved = temp.every(i => i);

    if (approved) {
      passports.push(passport);
    }

    passport = {};
  } else {
    let rowSplit = passportInput[i].split(" ");
    rowSplit.forEach(r => {
      let split = r.split(":");
      let type = split[0];
      let input = split[1];

      if (allowed[type]) {
        passport[type] = input;
      } else {
        approved = false;
      }
    });
  }
}

console.log(passports.length);
