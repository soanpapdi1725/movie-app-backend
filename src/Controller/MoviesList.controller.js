import "dotenv/config";
import { TMDB_CONFIG } from "../Config/tmdb.config.js";
import { apiConnector } from "../Config/axios.js";

export const getMovies = async (req, res) => {
  try {
    const query = req.body?.query;

    const endpoint = query
      ? `${TMDB_CONFIG.BASE_URL}/search/movie?query=${encodeURIComponent(query)}`
      : `${TMDB_CONFIG.BASE_URL}/discover/movie?sort_by=popularity.desc`;

    const response = await apiConnector(
      "GET",
      endpoint,
      null,
      TMDB_CONFIG.HEADERS,
    );

    return res.status(200).json({
      success: true,
      message: "movies found successfully",
      data: response,
    });
  } catch (error) {
    console.log("Error while getting movies", error);
    return res.status(500).json({
      success: false,
      message: "Failed to get the movies... Try again later",
    });
  }
};

export const getMovieDetail = async (req, res) => {
  try {
    const { movieId } = req.params;
    console.log(movieId);
    const endpoint = `${TMDB_CONFIG.BASE_URL}/movie/${movie_id}`;
    const response = await apiConnector(
      "GET",
      endpoint,
      null,
      TMDB_CONFIG.HEADERS,
    );
    if (!response) {
      return res.status(404).json({
        success: false,
        message: "Movie not found",
        data: null,
      });
    }
    return res.status(200).json({
      success: true,
      message: "Movie found successfully",
      data: response?.data,
    });
  } catch (error) {
    console.log("Error while getting movie detail", error);
    return res.status(500).json({
      success: false,
      message: "Failed to get the movie detail... Try again later",
    });
  }
};
