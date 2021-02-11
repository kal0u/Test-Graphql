const fetch = require('node-fetch');

const baseURL = 'http://www.omdbapi.com/';
const searchQueryKey = '?s=';
const movieIdQueryKey = '?i=';
const yearOptionalQueryKey = '&y=';
const apiKey = '&apikey=f229262c';

const omdbFetcher = args => {
  const fullURL = args.movieId
  ? findByMovieID(args.movieId)
  : searchFor(args.movieInput.title, args.movieInput.year);

  return fetch(fullURL)
    .then(response => response.json())
    .catch(error => {
      throw new Error(error.Error)
    });
};

const findByMovieID = id => baseURL + movieIdQueryKey + id + apiKey;

const searchFor = (title, year) => {
  return year ?
    baseURL + searchQueryKey + title + yearOptionalQueryKey + year + apiKey :
    baseURL + searchQueryKey + title + apiKey;
};

module.exports = {
  movies: async args => {
    try {
      const movies = await omdbFetcher(args);
      return movies.Search;
    } catch (e) {
      console.log(e);
    }
  },
  movie: async args => {
    try {
      const movie = await omdbFetcher(args);
      return movie;
    } catch (e) {
      console.log(e);
    }
  }
};