const FileSystem = require("fs");

let input = FileSystem.readFileSync("./input.txt", "utf-8");
let seatDirections = input.split("\n").filter(s => s !== "");

let seatNumbers = [];

for (let i = 0; i < seatDirections.length; i++) {
  let dir = [...seatDirections[i]];

  let row = getSeatFromIndex(dir, [0, 6], [0, 127]);
  let col = getSeatFromIndex(dir, [7, 9], [0, 7]);

  seatNumbers.push(row * 8 + col);
}

seatNumbers = seatNumbers.sort();

for (let seatIndex = 0; seatIndex < seatNumbers.length; seatIndex++) {
  let seat = seatNumbers[seatIndex];

  if (seatNumbers[seatIndex + 1] === seat + 2) {
    console.log(seat + 1);
  }
}

function getSeatFromIndex(dir, [start, end], [min, max]) {
  for (let i = start; i < end; i++) {
    let diff = Math.ceil((max - min) / 2);

    if (dir[i] === "F" || dir[i] === "L") {
      max -= diff;
    } else {
      min += diff;
    }
  }

  if (dir[end] === "F" || dir[end] === "L") {
    return min;
  }

  return max;
}
