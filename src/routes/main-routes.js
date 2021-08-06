const Router = require("express").Router;

const mainRouter = Router();

mainRouter.get("/", (req, res) => {
  res.status(200).send({
    message: "This is the Main Router",
  });
});

module.exports = {mainRouter: mainRouter};