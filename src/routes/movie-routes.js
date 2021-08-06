const Router = require("express").Router;

const movieRouter = Router();

// /movies ---------------

movieRouter.route("/:id/credits") // TODO MUST BE PROTECTED
  .get((req, res) => {
    res.status(200).send({
      message: `This is the Movie credits of the Movie: ${req.params.id}. GET METHOD`,
    });
  })
  .post((req, res) => {

    res.status(200).send({
      message: `This is the Movie credits of the Movie: ${req.params.id}. POST METHOD`,
    });
  })
  .patch((req, res) => {

    res.status(200).send({
      message: `This is the Movie credits of the Movie: ${req.params.id}. PATCH METHOD`,
    });
  })
  .delete((req, res) => {

    res.status(200).send({
      message: `This is the Movie credits of the Movie: ${req.params.id}. DELETE METHOD`,
    });
  });


movieRouter.route("/:id") // TODO MUST BE PROTECTED
  .get( (req, res) => {
  res.status(200).send({
    message: `You requested the movie with the id of: ${req.params.id}`,
  })})
  .delete( (req, res) => {
    res.status(200).send({
      message: `You requested the movie with the id of: ${req.params.id}`,
    })})
  .patch( (req, res) => {
    res.status(200).send({
      message: `You requested the movie with the id of: ${req.params.id}`,
    })});

movieRouter.post("/", (req, res) => { // TODO MUST BE PROTECTED
  res.status(200).send({
    message: "This is the Movie main Router",
  });
});


module.exports = { movieRouter: movieRouter };