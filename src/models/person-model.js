const mongoose = require("mongoose");
const { Schema } = require("mongoose");

const PersonSchema = new Schema({
  name: {
    type: String,
    required: true,
    trim: true,
    unique: true,
  },
  dateOfBirth: {
    type: Date,
    required: true
  },
  placeOfBirth: {
    type: String,
  },
  roles: {
    type: [{ type: String, trim: true, enum: ['actor', 'actress', 'director', 'camera', "producer", "writer"]}],
    default: undefined,
    required: true,
  }
}, {timestamps: true})

const personModel = new mongoose.model("person", PersonSchema);

module.exports = personModel;