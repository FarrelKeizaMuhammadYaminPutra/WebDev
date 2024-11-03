import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import cookieParser from "cookie-parser";
import path from "path";

import { connectDB } from "./db/connectDB.js"; // Sequelize connection setup
import authRoutes from "./routes/auth.route.js";
import movieRoutes from "./routes/movieRoutes.js";
import genreRoute from "./routes/genreRoute.js";
import countryRoute from "./routes/countryRoute.js";
import actorRoute from "./routes/actorRoute.js";
import reviewRoute from "./routes/reviewRoute.js";

// Initialize environment variables
dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;
const __dirname = path.resolve();

// Middleware
app.use(cors({ origin: "http://localhost:5173", credentials: true }));
app.use(express.json()); // Parse incoming JSON requests
app.use(cookieParser()); // Parse cookies

// API Routes
app.use("/api/auth", authRoutes);
app.use("/landing", movieRoutes);
app.use("/genres", genreRoute);
app.use("/countries", countryRoute);
app.use("/actors", actorRoute);
app.use("/reviews", reviewRoute);

// Serve frontend files in production
if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "/frontend/dist")));

  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "frontend", "dist", "index.html"));
  });
}

// Start the server and connect to the database
const startServer = async () => {
  try {
    await connectDB(); // Connect to MySQL via Sequelize
    console.log("Database connected successfully");

    app.listen(PORT, () => {
      console.log(`Server is running on port: ${PORT}`);
    });
  } catch (error) {
    console.error("Error connecting to the database:", error);
    process.exit(1); // Exit the process if the database fails to connect
  }
};

// Start the server
startServer();
