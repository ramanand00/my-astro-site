const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const helmet = require("helmet");
require("dotenv").config();

const app = express();

// Middleware
const allowedOrigins = ['http://localhost:5173'];
app.use(cors({
  origin: allowedOrigins,
  credentials: true,
}));
app.use(helmet());
app.use(express.json());

// MongoDB Connection
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log("MongoDB connected locally"))
.catch(err => console.error("MongoDB connection error:", err));

// Import routes
const blogRoutes = require("./api/blogs/index");
const authRoutes = require("./api/auth/index");
const activityRoutes = require("./api/activities/index");
const contactRoutes = require("./api/contact/index");

// Routes
app.use("/api/activities", activityRoutes);
app.use("/api/contact", contactRoutes);
app.use("/api/blogs", blogRoutes);
app.use("/api/auth", authRoutes);

// Health check
app.get("/api/health", (req, res) => {
  res.json({ 
    status: "OK", 
    timestamp: new Date().toISOString(),
    environment: "local"
  });
});

// Root endpoint
app.get("/", (req, res) => {
  res.json({ 
    message: "Backend Server running locally",
    endpoints: [
      "/api/activities",
      "/api/blogs",
      "/api/auth/register",
      "/api/auth/login",
      "/api/contact"
    ]
  });
});

// Handle 404
app.use((req, res) => {
  res.status(404).json({ error: "Route not found" });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
  console.log(`Health check: http://localhost:${PORT}/api/health`);
});