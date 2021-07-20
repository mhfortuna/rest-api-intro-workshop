const db = require("../models");
const { generateResponse } = require("../utils/generateResponse");

async function addMovie(req, res, next) {
  const {
    title,
    releaseYear = 0,
    posterPath = "",
    plot = "",
    budget = 0,
    originalLanguage = "",
    productionCountries = [],
    productionCompanies = [],
    genres = [],
  } = req.body;

  try {
    const movie = await db.Movie.create({
      title: title,
      releaseYear: releaseYear,
      posterPath: posterPath,
      plot: plot,
      budget: budget,
      originalLanguage: originalLanguage,
      productionCountries: productionCountries,
      productionCompanies: productionCompanies,
      genres: genres,
    });

    res.status(201).send(
      generateResponse({
        data: movie._id,
      }),
    );
  } catch (err) {
    next(err);
  }
}

async function updateMovie(req, res, next) {
  const { id: movieId } = req.params;
  const {
    title,
    releaseYear,
    posterPath,
    plot,
    budget,
    originalLanguage,
    productionCountries = [],
    productionCompanies = [],
    genres = [],
  } = req.body;

  try {
    const movie = await db.Movie.findOneAndUpdate(
      { _id: movieId },
      {
        $set: {
          title: title,
          releaseYear: releaseYear,
          posterPath: posterPath,
          plot: plot,
          budget: budget,
          originalLanguage: originalLanguage,
        },
        $addToSet: {
          genres: {
            $each: [...genres],
          },
          productionCountries: {
            $each: [...productionCountries],
          },
          productionCompanies: {
            $each: [...productionCompanies],
          },
        },
      },
      {
        new: true,
        omitUndefined: true,
        select: {
          __v: 0,
        },
      },
    ).lean();

    res.status(200).send(
      generateResponse({
        data: movie,
      }),
    );
  } catch (err) {
    next(err);
  }
}

async function fetchMovies(req, res, next) {
  try {
    const movies = await db.Movie.find({}, "-__v").lean();

    res.status(201).send(
      generateResponse({
        data: {
          movies: movies,
        },
      }),
    );
  } catch (err) {
    next(err);
  }
}

async function fetchMovie(req, res, next) {
  const { id: movieId } = req.params;

  try {
    const movie = await db.Movie.findOne({ _id: movieId }, "-__v").lean();

    res.status(200).send(
      generateResponse({
        data: movie,
      }),
    );
  } catch (err) {
    next(err);
  }
}

module.exports = {
  addMovie: addMovie,
  updateMovie: updateMovie,
  fetchMovies: fetchMovies,
  fetchMovie: fetchMovie,
};
