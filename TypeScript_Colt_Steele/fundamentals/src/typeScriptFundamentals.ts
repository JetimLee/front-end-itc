// function twoFer(name?: string): string {
//   if (name) return `One for ${name}, one for me.`;
//   return "One for you, one for me";
// }

// console.log(twoFer());
// console.log(twoFer("Gavin"));

// function isLeapYear(year: number): boolean {
//   if (year % 4 === 0) {
//     if (year % 100 === 0) {
//       if (year % 400 === 0) {
//         return true;
//       }
//       return false;
//     }
//     return true;
//   }
//   return false;
// }

// console.log(isLeapYear(1900));
// console.log(isLeapYear(1992));
// console.log(isLeapYear(2000));

//type alias
// type Point = { x: number; y: number };
// const myPoint: Point = { x: 30, y: 50 };

// type BoxOffice = { budget: number; grossUS: number; grossWorldwide: number };

// type Movie = {
//   readonly title: string;
//   originalTitle?: string;
//   director: string;
//   releaseYear: number;
//   boxOffice: BoxOffice;
// };

// const dune: Movie = {
//   title: "Dune",
//   originalTitle: "Dune Part One",
//   director: "Denis Villeneuve",
//   releaseYear: 2021,
//   boxOffice: {
//     budget: 165000000,
//     grossUS: 108327830,
//     grossWorldwide: 400671789,
//   },
// };

// const cats: Movie = {
//   title: "Cats",
//   director: "Top Hooper",
//   releaseYear: 2019,
//   boxOffice: { budget: 95000000, grossUS: 27166770, grossWorldwide: 73833348 },
// };

// function getProfit(movie: Movie): number {
//   return movie.boxOffice.grossWorldwide - movie.boxOffice.budget;
// }
// console.log(getProfit(cats));

// const ages: number[] = [];
// const gameBoard: string[][] = [];
// type Product = { name: string; price: number };
// function getTotal(arr: Product[]): number {
//   return arr
//     .map((product) => {
//       return product.price;
//     })
//     .reduce((acc, cur) => {
//       return acc + cur;
//     }, 0);
// }

// const highScore: number | boolean = 1;
// console.log(highScore);

// let stuff: number[] | string[];
// type SkillLevel = "Beginner" | "Intermediate" | "Advanced" | "Expert";

// type SkiSchoolStudent = {
//   name: string;
//   age: number;
//   sport: "ski" | "snowboard";
//   level: SkillLevel;
// };
// type RGBColor = { r: number; g: number; b: number };
// type HSLColor = { h: number; s: number; l: number };
// let colors: (RGBColor | HSLColor)[];

// function greet(str: string | string[]) {
//   if (typeof str === "object") {
//     for (const name of str) {
//       console.log(`Hello, ${name}`);
//     }
//   } else {
//     console.log(`Hello, ${str}`);
//   }
// }

// const names = ["Gavin", "Cory", "Sapir", "Riki"];
// const singleName = "Stephen";
// greet(names);
// greet(singleName);
