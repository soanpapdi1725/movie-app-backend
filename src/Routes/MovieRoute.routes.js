import express from "express";
const MovieRouter = express.Router();

import {
  updateSearchCount,
  getTrendingMovies,
} from "../Controller/Recommendation.controller.js";
import { getMovies, getMovieDetail, searchMovie } from "../Controller/MoviesList.controller.js";
MovieRouter.post("/AddRecommendations", updateSearchCount);
MovieRouter.get("/getTrendingMovies", getTrendingMovies);
MovieRouter.get("/getMovies", getMovies);
MovieRouter.get("/getMovieDetail/:movieId", getMovieDetail);
MovieRouter.get("/searchResults", searchMovie);
export default MovieRouter;
