const db = require("../models");
const { getSeedMovies, getSeedPeople } = require("./seed-data");

async function seedAll() {
  await seedPeople();
  console.log("people inserted");
  await seedMovies();
  console.log("movies inserted");
}

async function seedMovies() {
  const moviesArray = await getSeedMovies();
  const movies = [...moviesArray].map((movie) => ({
    ...movie,
  }));

  // await db.Movie.deleteMany({});
  await db.movieModel.create([...movies]);
}

async function seedPeople() {
  const people = [...getSeedPeople()].map((person) => ({
    ...person,
  }));

  // await db.Movie.deleteMany({});
  await db.personModel.create([...people]);
}

module.exports = {
  seedMovies: seedMovies,
  seedPeople: seedPeople,
  seedAll: seedAll
};