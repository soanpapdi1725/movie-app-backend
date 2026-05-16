// const express = require("express");
// const cors = require("cors");
// const database = require("./src/Config/database");
// const MovieRouter = require("./src/Routes/MovieRoute");
import express from "express";
import cors from "cors";
import { connect } from "./src/Config/database.config.js";
import MovieRouter from "./src/Routes/MovieRoute.routes.js";
const PORT = process.env.BACKEND_PORT || 4000;
import "dotenv/config";

await connect();
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(
  cors({
    origin: "*",
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"],
  }),
);

app.use((req, res, next) => {
  console.log("Method:", req.method, "Path:", req.path);
  next();
});
// Routes added in Server index
app.use("/api/v1/movie", MovieRouter);

// server up and running showing
app.use("/", (req, res) => {
  return res.json({
    success: true,
    message: "Server is up and running",
  });
});

app.listen(PORT, () => {
  console.log(`server is up and running on http://localhost:${PORT}`);
});
