import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";

import authRoutes from "./routes/auth.js";
import eventsRoutes from "./routes/events.js";
import companiesRoutes from "./routes/companies.js";
import jobsRoutes from "./routes/jobs.js";

dotenv.config();

const app = express();

// MIDDLEWARE
app.use(cors({
  origin: "http://localhost:5173",
}));
app.use(express.json());

// TEST ROUTE
app.get("/", (req, res) => {
  res.send("Backend is running");
});

// ROUTES
app.use("/api/auth", authRoutes);
app.use("/api/events", eventsRoutes);
app.use("/api/companies", companiesRoutes);
app.use("/api/jobs", jobsRoutes);

// DB CONNECT
console.log("MONGO URI:", process.env.MONGO_URI);

mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    console.log("✅ MongoDB connected");

    // START SERVER ONLY AFTER DB CONNECTS
    const PORT = process.env.PORT || 5000;

    app.listen(PORT, () => {
      console.log(`🚀 Server running on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.log("❌ MongoDB ERROR:");
    console.log(err.message);
  });