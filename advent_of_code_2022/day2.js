import { readFileSync } from "node:fs";

const lines = readFileSync("day2.txt", { encoding: "utf-8" })
  .replace(/\r/g, "")
  .trim()
  .split("\n")
  .map((line) => line.split(" "));

const moves = {
  rock: 1,
  paper: 2,
  scissors: 3,
};

const mapInput = {
  A: moves.rock,
  B: moves.paper,
  C: moves.scissors,
  X: moves.rock,
  Y: moves.paper,
  Z: moves.scissors,
};
const newMapInput = {
  A: moves.rock,
  B: moves.paper,
  C: moves.scissors,
  X: "LOSE",
  Y: "DRAW",
  Z: "WIN",
};

function score(opponentMove, ourMove) {
  if (opponentMove === ourMove) {
    //tie
    return ourMove + 3;
  }
  if (
    (opponentMove === moves.rock && ourMove === moves.paper) ||
    (opponentMove === moves.paper && ourMove === moves.scissors) ||
    (opponentMove === moves.scissors && ourMove === moves.rock)
  ) {
    //winning conditions
    return ourMove + 6;
  }
  //lost here
  return ourMove;
}
function action(opponentMove, ourMove) {
  switch (ourMove) {
    case "LOSE":
      if (opponentMove === moves.rock) {
        return moves.scissors;
      }
      if (opponentMove === moves.paper) {
        return moves.rock;
      }
      if (opponentMove === moves.scissors) {
        return moves.paper;
      }
      break;
    case "DRAW":
      return opponentMove;
    case "WIN":
      if (opponentMove === moves.rock) {
        return moves.paper;
      }
      if (opponentMove === moves.paper) {
        return moves.scissors;
      }
      if (opponentMove === moves.scissors) {
        return moves.rock;
      }
      break;
  }
}

function part1() {
  const outcomes = lines.map((line) => {
    const opponentMove = mapInput[line[0]];
    const ourMove = mapInput[line[1]];
    return score(opponentMove, ourMove);
  });
  console.log(outcomes);
  const sum = outcomes.reduce((acc, cur) => acc + cur, 0);
  console.log(sum);
}

function part2() {
  const outcomes = lines.map((line) => {
    const opponentMove = mapInput[line[0]];
    const ourMove = action(opponentMove, newMapInput[line[1]]);
    return score(opponentMove, ourMove);
  });
  const sum = outcomes.reduce((acc, cur) => acc + cur, 0);
  console.log(sum);
}

// part1();
part2();
