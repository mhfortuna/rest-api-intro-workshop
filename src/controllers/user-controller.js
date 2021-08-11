const { userModel } = require("../models");
const { encryptString, matchEncrypted } = require("../utils/encrypt");
const db = require("../models");
const { generateToken } = require("../services/auth");

async function fetchUsers(req, res, next) {}

async function signUp(req, res, next) {
  try {
    const { firstName, lastName, email, password } = req.body;
    const encryptedPassword = await encryptString(password);
    const { inserting, errors, _id } = await db.userModel.create({
      firstName: firstName,
      lastName: lastName,
      email: email,
      password: encryptedPassword,
    });
    if (inserting == true) {
      res.status(201).send({
        message: "User created successfully",
        id: _id,
      });
    } else {
      res.status(400).send({
        message: "Failed to create user",
        error: errors,
      });
    }
  } catch (err) {
    res.status(400).send({
      message: "Failed to create user",
      error: err,
    });
  }
}

async function signIn(req, res, next) {
  try {
    const { email, password } = req.body;
    const response = await db.userModel.findOne(
      { email: email },
      { password: 1 },
    );
    if (response === null) {
      res.status(401).send({
        message: "Email or password wrong", // really email
      });
    } else {
      const hashedPassword = response._doc.password;
      const passwordResult = await matchEncrypted(password, hashedPassword);
      const token = generateToken({ email: email });
      if (passwordResult === true) {
        res.status(200).send({
          message: "Successful login",
          accessToken: token,
        });
      } else {
        res.status(401).send({
          message: "Email or password wrong", // Really password
        });
      }
    }
  } catch (err) {
    res.status(400).send({
      message: "Failed to login",
      error: err,
    });
  }
}

module.exports = {
  fetchUsers: fetchUsers,
  signUp: signUp,
  signIn: signIn,
};
