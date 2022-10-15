/* 
In JavaScript, short-circuiting is the evaluation of an expression from left to right with || and && operators. 
If the condition is met and the rest of the conditions won't affect the already evaluated result, 
the expression will short-circuit and return that result (value).
*/

const game = {
  team1: "Bayern Munich",
  team2: "Borrussia Dortmund",
  players: [
    [
      "Neuer",
      "Pavard",
      "Martinez",
      "Alaba",
      "Davies",
      "Kimmich",
      "Goretzka",
      "Coman",
      "Muller",
      "Gnarby",
      "Lewandowski",
    ],
    [
      "Burki",
      "Schulz",
      "Hummels",
      "Akanji",
      "Hakimi",
      "Weigl",
      "Witsel",
      "Hazard",
      "Brandt",
      "Sancho",
      "Gotze",
    ],
  ],
  score: "4:0",
  scored: ["Lewandowski", "Gnarby", "Lewandowski", "Hummels"],
  date: "Nov 9th, 2037",
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};
const { players } = game;
const [player1, player2] = players;
const [gk1, ...fieldPlayers1] = player1;
const [gk2, ...fieldPlayers2] = player2;
const allPlayers = [...player1, ...player2];

const players1Final = [...player1, "Thiago", "Coutinho", "Perisic"];

const { odds } = game;
const { team1, x: draw, team2 } = odds;

function printGoals(...players) {
  console.log(`Number of goals ${players.length}`);
  players.forEach((player) => {
    console.log(player);
  });
}

printGoals("Davies", "Muller", "Lewandowski", "Kimmich");
printGoals(...game.scored);

team1 < team2 && console.log("Team 1 is more likely to win");
team2 < team1 && console.log("Team 2 is more likely to win");
//getting an index when using for of loop
for (const [i, player] of player1.entries()) {
  console.log(i, player);
}

let a = 3;
let b = 4;

// let temp = b;
// b = a;
// a = temp;
// [b, a] = [a, b];

// console.log(a, b);

const users = [{ name: "gavin", email: "something@gmail.com" }];

//nullish coal and optional chaining
console.log(users[0]?.something ?? "This property doesn't exist");
console.log(users[0]?.email ?? "This property doesn't exist");
