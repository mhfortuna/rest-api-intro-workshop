const db = require("../models");
const { encryptString } = require("../utils/encrypt");
const { generateResponse } = require("../utils/generateResponse");

async function signUp(req, res, next) {
  const { email, password, firstName, lastName } = req.body;

  try {
    const encryptedPassword = await encryptString(password);
    const { _id } = await db.User.create({
      email: email,
      password: encryptedPassword,
      firstName: firstName,
      lastName: lastName,
      active: true,
    });

    return res.status(200).send(
      generateResponse({
        data: {
          id: _id,
          email,
        },
      }),
    );
  } catch (err) {
    // console.log(err);
    next(err);
  }
}

async function fetchUsers(req, res, next) {
  try {
    const dbResponse = await db.User.find();

    if (dbResponse.error) {
      res.status(400).send(
        generateResponse({
          error: dbResponse.error,
        }),
      );
    }

    res.status(200).send(
      generateResponse({
        data: dbResponse.data,
      }),
    );
  } catch (error) {
    next(error);
  }
}

async function fetchUserById(req, res, next) {
  const {
    params: { id: userId },
  } = req;

  try {
    const dbResponse = await db.User.findById(userId);

    if (dbResponse.error) {
      res.status(400).send(
        generateResponse({
          error: dbResponse.error,
        }),
      );
    }

    res.status(200).send(
      generateResponse({
        data: dbResponse.data,
      }),
    );
  } catch (error) {
    next(error);
  }
}

async function updateUser(req, res, next) {
  const { id: userId } = req.params;
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

    res.status(200).send(
      generateResponse({
        data: updatedUser,
      }),
    );
  } catch (error) {
    next(error);
  }
}

async function deleteUser(req, res, next) {
  const { id: userId } = req.params;

  try {
    const result = await db.User.deleteOne({
      _id: userId,
    }).lean();

    if (result.ok === 1 && result.deletedCount === 1) {
      res.status(200).send(
        generateResponse({
          data: "User removed",
        }),
      );
    } else {
      res.status(500).send(
        generateResponse({
          error: "User not removed",
        }),
      );
    }
  } catch (error) {
    next(error);
  }
}

module.exports = {
  signUp: signUp,
  fetchUsers: fetchUsers,
  fetchUserById: fetchUserById,
  updateUser: updateUser,
  deleteUser: deleteUser,
};
