const Router = require("express").Router;

const userRouter = Router();


userRouter.get("/register/", (req, res) => {

  console.log("register");
  res.status(200).send({
    message: "This is the User Router in register",
  });

});

userRouter.get("/authenticate/", (req, res) => {

  console.log("Auth");
  res.status(200).send({
    message: "This is the User Router in register",
  });

});

// /users/

userRouter.route("/:id") // TODO MUST BE PROTECTED
  .get((req, res) => {
    console.log(`Requested user with id: ${req.params.id}`);

    res.status(200).send({
      message: "This is the User Router",
    });
  })
  .delete((req, res) => {
    console.log(`Requested user with id: ${req.params.id}`);

    res.status(200).send({
      message: "This is the User Router",
    });
  })
  .patch((req, res) => {
    console.log(`Requested user with id: ${req.params.id}`);

    res.status(200).send({
      message: "This is the User Router",
    });
  });

module.exports = { userRouter: userRouter };