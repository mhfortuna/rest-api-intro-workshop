const Router = require("express").Router;

const personRouter = Router();

personRouter.route("/:id") // TODO MUST BE PROTECTED
  .get((req, res) => {
    res.status(200).send({
      message: `Person router`,
    });
  })
  .delete((req, res) => {
    res.status(200).send({
      message: `Person router`,
    });
  })
  .patch((req, res) => {
    res.status(200).send({
      message: `Person router`,
    });
  });

personRouter.get("/", (req, res) => {
  res.status(200).send({ // TODO MUST BE PROTECTED
    message: `Person router without id`,
  });
});


module.exports = { personRouter: personRouter };