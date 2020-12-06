const FileSystem = require("fs");

let input = FileSystem.readFileSync("./input.txt", "utf-8");
let array = input.split("\n");

let travers = [0, 0];
let trees = 0;

let passport = {};

let allowed = {
  byr: v => checkBirthYear(v),
  iyr: v => checkIssueYear(v),
  eyr: v => checkExpireYear(v),
  hgt: v => checkHeight(v),
  hcl: v => checkHairColor(v),
  ecl: v => checkEyeColor(v),
  pid: v => checkPid(v)
};

let temp = [];

let passports = [];

for (let i = 0; i < array.length; i++) {
  if (array[i] === "") {
    // check  required
    temp = Object.entries(allowed).map(([key, func]) => func(passport[key]));

    // approved
    if (temp.every(i => i)) {
      passports.push(passport);
    }

    passport = {};
    //push data
  } else {
    let rowSplit = array[i].split(" ");
    rowSplit.forEach(r => {
      let split = r.split(":");
      let type = split[0];
      let input = split[1];

      if (allowed[type]) {
        passport[type] = input;
      }
    });
  }
}

console.log(passports.length);

function checkBirthYear(year) {
  if (passport.byr) {
    let parsedYear = parseInt(passport.byr);

    return 1920 <= parsedYear && parsedYear <= 2002;
  }

  return false;
}

function checkIssueYear(year) {
  if (passport.iyr) {
    let parsedYear = parseInt(passport.iyr);

    return 2010 <= parsedYear && parsedYear <= 2020;
  }

  return false;
}

function checkExpireYear(year) {
  if (passport.eyr) {
    let parsedYear = parseInt(passport.eyr);

    return 2020 <= parsedYear && parsedYear <= 2030;
  }

  return false;
}

function checkHeight(h) {
  if (passport.hgt) {
    let height = null;

    if (passport.hgt.includes("cm")) {
      height = parseInt(passport.hgt.split("cm")[0]);

      return 150 <= height && height <= 193;
    } else if (passport.hgt.includes("in")) {
      height = parseInt(passport.hgt.split("in")[0]);

      return 59 <= height && height <= 76;
    }
  }

  return false;
}

function checkHairColor(code) {
  if (passport.hcl && passport.hcl.includes("#")) {
    let hairSplit = passport.hcl.split("#");
    let hairColor = [...hairSplit[1]];

    let col = hairColor.map(hc => /[a-z]|[0-9]/.test(hc));

    return col.length === 6 && col.every(c => c);
  }

  return false;
}

function checkEyeColor(code) {
  let allowedEyes = {
    amb: true,
    blu: true,
    brn: true,
    gry: true,
    grn: true,
    hzl: true,
    oth: true
  };

  return passport.ecl && allowedEyes[passport.ecl];
}

function checkPid(pid) {
  if (passport.pid) {
    let pid = [...passport.pid];

    return pid.length === 9 && pid.every(p => !isNaN(p));
  }

  return false;
}
