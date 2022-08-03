/* Now, you need to figure out how to pilot this thing.

It seems like the submarine can take a series of commands like forward 1, down 2, or up 3:

forward X increases the horizontal position by X units.
down X increases the depth by X units.
up X decreases the depth by X units.
Note that since you're on a submarine, down and up affect your depth, and so they have the opposite result of what you might expect.

The submarine seems to already have a planned course (your puzzle input). You should probably figure out where it's going. For example:*/

interface submarineDirections {
  direction: string;
  amount: number;
}
const direction1: submarineDirections = { direction: "forward", amount: 5 };
const direction2 = { direction: "down", amount: 5 };
const direction3 = { direction: "forward", amount: 8 };
const direction4 = { direction: "up", amount: 3 };
const direction5 = { direction: "down", amount: 8 };
const direction6 = { direction: "forward", amount: 2 };

const allSubmarineDirections = [
  direction1,
  direction2,
  direction3,
  direction4,
  direction5,
  direction6,
];

const calculateSubmarinePath = (arr: submarineDirections[]): number => {
  //depth can never be negative in this problem
  //input will always be lower cased

  let horizontal: number = 0;
  let depth: number = 0;
  for (let i = 0; i < arr.length; i++) {
    const { direction, amount } = arr[i];
    switch (direction) {
      case "forward":
        horizontal += amount;
        break;
      case "up":
        depth -= amount;
        break;
      case "down":
        depth += amount;
        break;
      default:
        horizontal += 0;
        depth += 0;
    }
  }

  const calculatedPath: number = horizontal * depth;
  console.log(calculatedPath);
  return calculatedPath;
};
calculateSubmarinePath(allSubmarineDirections);
