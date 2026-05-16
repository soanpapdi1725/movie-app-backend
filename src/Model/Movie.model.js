import { mongoose } from "mongoose";

export const movieSchema = new mongoose.Schema({
  searchTerm: { type: String, required: true },
  count: { type: Number, default: 0 },
  title: {
    type: String,
    required: true,
  },
  poster_url: { type: String, required: true },
  movie_id: { type: String, required: true },
});

export default mongoose.model("Movies", movieSchema);
