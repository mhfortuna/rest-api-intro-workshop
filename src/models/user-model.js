const mongoose = require("mongoose");
const { Schema } = require("mongoose");
const validator = require("validator");

const UserSchema = new Schema({
  firstName: {
    type: String,
    required: true,
    trim: true,
  },
  lastName: {
    type: String,
    trim: true,
    required: true,
  },
  email: {
    type: String,
    unique: true,
    required: true,
    lowercase: true,
    trim: true,
    validate: {
      validator: (value) => validator.isEmail(value),
      message: (props) => `${props.value} is not a valid email address`,
    }
  },
  password: {
    type: String,
    minlength: [8, "the password is too short"],
    required: true,
    trim: true,
  },
  isAdmin: {
    type: Boolean,
    default: false,
  },
}, {timestamps: true})

const userModel = new mongoose.model("user", UserSchema);

module.exports = userModel;