const { userRouter } = require("./user-routes");
const { mainRouter } = require("./main-routes");
const { movieRouter } = require("./movie-routes");
const { personRouter } = require("./person-routes");

module.exports = {
  userRouter: userRouter,
  mainRouter: mainRouter,
  movieRouter: movieRouter,
  personRouter: personRouter,
};