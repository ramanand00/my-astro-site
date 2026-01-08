const express = require("express");
const router = express.Router();
const Activity = require("../../models/Activity");

router.get("/", async (req, res) => {
  try {
    const activities = await Activity.find().sort({ createdAt: -1 }).limit(10);
    res.json(activities);
  } catch (err) {
    console.error("Activity fetch error:", err);
    res.status(500).json({ message: "Server Error" });
  }
});

// Export as a handler for Vercel
const handler = async (req, res) => {
  router(req, res);
};

module.exports = handler;