const movies = [
  { title: "a", year: 2018, rating: 4.5 },
  { title: "b", year: 2018, rating: 4.7 },
  { title: "c", year: 2018, rating: 3 },
  { title: "d", year: 2017, rating: 4.5 },
];

movies
  .filter((movie) => movie.rating >= 4 && movie.year === 2018)
  .sort((movie) => movie.rating)
  .reverse()
  .forEach((movie) => {
    console.log(movie.title);
  });
