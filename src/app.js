const Movie = require("./utils");

const input = process.argv;

// const movies = [];
// movies.push(input[2]);
// console.log(movies);

// if (input[2] === "add") {
//   const movieObj = new Movie("Spiderman", "Andrew Garfield");
//   movieObj.add();
// }

if (input[2] === "add") {
    const movieObj = new Movie(input[3], input[4]);
    movieObj.add();
  }