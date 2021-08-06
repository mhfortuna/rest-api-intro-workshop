const express = require("express");
const helmet = require("helmet");
// const { json } = require("body-parser");
const morgan = require("morgan");

const { mainRouter, userRouter, movieRouter, personRouter } = require("./routes");
// const { json } = require("body-parser");
// const mainRouter  = require("./routes/main-routes");

const app = express();

app.use(helmet());
app.use(morgan("dev")); // To see in terminal all requests

// app.use(json());
app.use("/", mainRouter);
app.use("/users", userRouter);
app.use("/movies", movieRouter);
app.use("/persons", personRouter);


module.exports = {
  app: app,
};