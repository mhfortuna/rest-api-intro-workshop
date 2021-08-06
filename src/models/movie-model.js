const mongoose = require("mongoose");
const { Schema } = require("mongoose");

const MovieSchema = new Schema({
  title: {
    type: String,
    required: true,
    trim: true,
  },
  releaseYear: {
    type: Date,
    required: true,
  },
  genres: {
    type: [{
      type: String,
      trim: true,
      enum: ["Action",
        "Adventure",
        "Animation",
        "Comedy",
        "Crime and mystery",
        "Drama",
        "Fantasy",
        "Historical",
        "Horror",
        "Romance",
        "Satire",
        "Science Fiction",
        "Thriller",
        "Western",
        "War"],
    }],
    default: undefined,
    required: true,
  },
  duration: {
    type: Number,
    required: true,
  },
  cast: {
    type: [{ type: mongoose.SchemaTypes.ObjectId, ref: "person" }],
    default: undefined,
    required: true,
  },
  crew: {
    type: [{ type: mongoose.SchemaTypes.ObjectId, ref: "person" }],
    default: undefined,
    required: true,
  },
}, { timestamps: true });

const movieModel = new mongoose.model("movie", MovieSchema);

module.exports = movieModel;