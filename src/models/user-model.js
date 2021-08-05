const mongoose = require("mongoose");
const { Schema } = require("mongoose");
const { isEmail } = require("validator");

const UserSchema = Schema();
/* 
firstName
lastName
email
password
nickName */

const User = mongoose.model("user", UserSchema);

module.exports = User;
