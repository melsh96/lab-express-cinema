const express = require("express");
const router = express.Router();
const movie = require("../models/Movie.model");

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

module.exports = router;
