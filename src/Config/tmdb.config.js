import "dotenv/config"

export const TMDB_CONFIG = {
  BASE_URL: "https://api.themoviedb.org/3",
  API_KEY: process.env.TMBD_MOVIE_API_KEY,
  HEADERS: {
    accept: "application/json",
    Authorization: `Bearer ${process.env.TMBD_MOVIE_API_KEY}`,
  },
};
