const Movie = require("../Model/Movie");

exports.updateSearchCount = async (req, res) => {
  try {
    // req ki body se query or movie nikal lenge
    const { searchQuery, title, poster_path, movie_id } = req.body;
    // Khali toh nahi aaya kahi searchQuery or movie
    if (!searchQuery || !title || !poster_path || !movie_id) {
      return res.status(400).json({
        success: false,
        message: "Provide all details",
      });
    }
    // check searchQuery ya movie ki id mil rahi hai ya nahi
    // mili toh count +1 kr denge
    const movieRecomm = await Movie.findOneAndUpdate(
      {
        $or: [
          { movie_id: movie_id },
          { title: title },
          { searchTerm: searchQuery },
        ],
      },
      {
        $inc: { count: 1 },
      },
      { new: true }
    );
    // Nahi mili toh create kar denge
    if (!movieRecomm) {
      await Movie.create({
        searchTerm: searchQuery,
        count: 1,
        title: title,
        poster_url: `https://image.tmdb.org/t/p/w500${poster_path}`,
        movie_id: movie_id,
      });
      return res.status(200).json({
        success: true,
        message: "Movie search added in DB",
      });
    }
    // response return kar denge ki ho gya boss
    return res.status(200).json({
      success: true,
      message: "Movie count updated by 1 in DB",
    });
  } catch (error) {
    console.log("Error in Recommendation", error);
    return res.status(500).json({
      success: false,
      message: "Failed to update or create movie recommendation in DB",
    });
  }
};

exports.getTrendingMovies = async (req, res) => {
  try {
    const allTrendingMovies = await Movie.find({}, null, {
      limit: 10,
      sort: { count: -1 },
    });
    if (allTrendingMovies.length > 0 === 0) {
      return res.status(404).json({
        success: false,
        message: "No movies are in the database to show trending page",
      });
    }
    return res.status(200).json({
      success: true,
      message: "Successfully delivered movies",
      data: allTrendingMovies,
    });
  } catch (error) {
    console.log("Error in getting trending movies", error);
    return res.status(500).json({
      success: false,
      message: "Failed to get movie recommendations in DB",
    });
  }
};
