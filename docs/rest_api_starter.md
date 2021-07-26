## REST APIs in Node.js

Building a REST API with Node.js is very easy. We just need to define an endpoint with express and return a response. However, this is very limited because usually we need a database to store and retrieve data from.

But now that we know how to use Mongoose we can connect it to express so that we can perform CRUD operations with it.

## Starting the Server

As we have seen in the previous workshop, we first need to connect to the database and then we can start the express server:

```js
// src/index.js
const app = require("./server");
const config = require("./config/config");
const connect = require("./db/connect");

// uncomment if you need to seed the database before
// const { seedMovies } = require("./db/seed");

connect().then(async function onServerInit() {
  config.logger.info(`DB connected`);

  // uncomment if you need to seed the database before
  // await seedMovies();

  app.listen(config.app.PORT, () => {
    config.logger.info(`Server running at http://localhost:${config.app.PORT}`);
  });
});
```

Then, we can define a basic endpoint with express to return a response for each request:

```js
const express = require("express");
const helmet = require("helmet");
const morgan = require("morgan");
const { json } = require("body-parser");

const app = express();

app.use(morgan("dev"));
app.use(helmet());
app.use(json());

app.get("/", (req, res) => {
  res.status(200).send({
    data: "hello-world",
  });
});

module.exports = app;
```

If we make a request to the `http://localhost:4000` endpoint we should get a response:

```json
{
  "data": "hello-world"
}
```

## Defining Routes and Controllers

In order to use the MVC design pattern we can create routes and controllers in our app. First, we need to create the controllers that will responsible for responding to each request:

```js
const db = require("../models");

async function fetchUsers(req, res, next) {
  try {
    const users = await db.User.find({}).lean();

    res.status(200).send({
      data: users,
    });
  } catch (error) {
    next(error);
  }
}

module.exports = {
  getUsers: getUsers,
};
```

Then, we need to create the router:

```js
const Router = require("express").Router;

const userController = require("../controllers/user-controller");

const UserRouter = Router();

UserRouter.get("/", userController.fetchUsers);

module.exports = UserRouter;
```

Then, instead of handling the response in the `server.js` file, we use the controllers that are defined as middleware in the router.

```js
app.use("/users", UserRouter);
```

An example of response when making a request to the `/users` endpoint would be the following:

```json
{
  "data": [
    {
      "_id": "...",
      "firstName": "...",
      "lastName": "...",
      ...
    },
    ...
  ]
}
```

## Getting a Single Resource

In order to get a single resource we can use route params. In this case we can get the details of a single user using the `req.params` property.

```js
// src/routes/user-routes.js
UserRouter.get("/:userId", userController.fetchUserById);
```

Then, we can define the controller that fetches the info of the user with the id that we pass.

```js
// src/routes/user-controller.js
async function fetchUserById(req, res, next) {
  const { userId } = req.params;

  try {
    const user = await db.User.findOne({
      _id: userId,
    })
      .select("-password -__v -createdAt -updatedAt")
      .lean();

    res.status(200).send({
      data: user,
    });
  } catch (error) {
    next(error);
  }
}
```

## Creating Resources

In order to create a resource we can simply define a `POST` handler and the controller that stores the information in the database.

```js
// src/routes/user-routes.js
UserRouter.post("/", userController.createUser);
```

All the information we send, in this case in json format, will be available in the `req.body` property because we are using the `express.json()` middleware.

```js
// src/routes/user-controller.js
async function createUser(req, res, next) {
  const { firstName, lastName, email, password } = req.body;

  try {
    const user = await db.User.create({
      firstName,
      lastName,
      email,
      password,
    });

    res.status(200).send({
      data: {
        _id: user._id,
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.email,
      },
    });
  } catch (error) {
    next(error);
  }
}
```

Then, we can send a `POST` request with the following `JSON` data:

```json
{
  "firstName": "John",
  "lastName": "Doe",
  "email": "jdoe@mail.com",
  "password": "jdoe-super-password"
}
```

And we should receive a response similar to the following:

```json
{
  "data": {
    "_id": "...",
    "firstName": "Jon",
    "lastName": "Doe",
    "email": "jdoe@mail.com"
  }
}
```

## Updating Resources

In order to update a resource, we can create a `PATCH` handler and controller:

```js
// src/routes/user-routes.js
UserRouter.patch("/", userController.updateUser);
```

```js
// src/routes/user-controller.js
async function updateUser(req, res, next) {
  const { userId } = req.params;
  const { firstName, lastName } = req.body;

  try {
    const updatedUser = await db.User.findOneAndUpdate(
      {
        _id: userId,
      },
      {
        $set: {
          firstName: firstName,
          lastName: lastName,
        },
      },
      {
        new: true,
      },
    ).select({
      firstName: 1,
      lastName: 1,
    });

    res.status(200).send({
      data: updatedUser,
    });
  } catch (error) {
    next(error);
  }
}
```

Then, if we make a request with the `PATCH` HTTP Verb and we send the following data:

```json
{
  "firstName": "billy",
  "lastName": "elliot"
}
```

We should get a response:

```json
{
  "data": {
    "_id": "5ffa0520791f51190117e5ca",
    "firstName": "billy",
    "lastName": "elliot"
  }
}
```

## Deleting a Resource

In order to delete a resource we can follow the same logic, we need to define an endpoint in the router and a controller that handles the request.

```js
// src/routes/user-routes.js
UserRouter.delete("/:userId", userController.deleteUser);
```

```js
// src/routes/user-controller.js
async function deleteUser(req, res, next) {
  const { userId } = req.params;

  try {
    const result = await db.User.deleteOne({
      _id: userId,
    }).lean();

    if (result.ok === 1 && result.deletedCount === 1) {
      res.status(200).send({
        data: "User removed",
      });
    } else {
      res.status(500).send({
        data: "User not removed",
      });
    }
  } catch (error) {
    next(error);
  }
}
```

Then, if we make a request to the endpoint with the `DELETE` verb, we should get a response if the `userId` exists in the database.
