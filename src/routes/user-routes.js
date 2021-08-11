const Router = require("express").Router;
const { userController } = require("../controllers");
const { authMiddleware } = require("../middlewares/auth-middleware");

const userRouter = Router();

userRouter.post("/register/", userController.signUp);

userRouter.post("/authenticate/", userController.signIn);

// /users/

userRouter
  .route("/:id") // TODO MUST BE PROTECTED
  .get(authMiddleware, (req, res) => {
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
