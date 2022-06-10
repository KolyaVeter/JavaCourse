const numberOfFilms = +prompt("how many movies have you saw?", "");

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    private: false
};

const a = prompt("you lust movei?"),
      b = prompt('rate movei'),
      c = prompt("you lust movei?"),
      d = prompt('rate movei');

       
personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;

console.log(personalMovieDB);