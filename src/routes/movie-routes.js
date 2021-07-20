const Router = require("express").Router;

const { authMiddleware } = require("../middlewares");
const { movieController } = require("../controllers");

const movieRouter = Router();

movieRouter.get("/:id", authMiddleware, movieController.fetchMovie);
movieRouter.put("/:id", authMiddleware, movieController.updateMovie);

movieRouter.get("/", authMiddleware, movieController.fetchMovies);
movieRouter.post("/", authMiddleware, movieController.addMovie);

module.exports = { movieRouter: movieRouter };
