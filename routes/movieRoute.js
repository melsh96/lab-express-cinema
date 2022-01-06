const express = require("express");
const router = express.Router();
const movie = require("../models/Movie.model");
const mongoose = require("mongoose");

router.get("/", (req, res) => {
  movie
    .find()
    .then((dbRes) => {
      console.log("ici", dbRes);
      res.render("movies", {
        movies: dbRes,
      });
    })
    .catch((e) => console.error(e));
});

router.get("/:id", (req, res) => {
  const isValidId = mongoose.isValidObjectId(req.params.id);
  const id = req.params.id;
  if (isValidId) {
    movie
      .findById(id)
      .then((movie) => {
        res.render("oneMovie", {
          movie: movie,
        });
      })
      .catch((e) => console.error(e));
  } else {
    next();
  }
});

module.exports = router;
