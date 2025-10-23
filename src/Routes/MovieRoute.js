const express = require("express");
const MovieRouter = express.Router();
const {
  updateSearchCount,
  getTrendingMovies,
} = require("../Controller/Recommendation");

MovieRouter.post("/AddRecommendations", updateSearchCount);
MovieRouter.get("/getTrendingMovies", getTrendingMovies);

module.exports = MovieRouter;
