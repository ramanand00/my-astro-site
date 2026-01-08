const express = require("express");
const router = express.Router();
const Blog = require("../../models/Blog");

// GET all blogs
router.get("/", async (req, res) => {
  try {
    const blogs = await Blog.find().sort({ createdAt: -1 });
    res.json(blogs);
  } catch (err) {
    console.error("Blog fetch error:", err);
    res.status(500).json({ error: "Failed to fetch blogs" });
  }
});

// GET single blog by ID
router.get("/:id", async (req, res) => {
  try {
    const blog = await Blog.findById(req.params.id);
    if (!blog) {
      return res.status(404).json({ error: "Blog not found" });
    }
    res.json(blog);
  } catch (err) {
    console.error("Blog fetch by ID error:", err);
    res.status(400).json({ error: "Invalid blog ID" });
  }
});

// POST create a new blog
router.post("/", async (req, res) => {
  try {
    const { title, slug, content, image, tags, author } = req.body;

    if (!title || !content) {
      return res.status(400).json({ error: "Title and content are required" });
    }

    const newBlog = new Blog({
      title,
      slug: slug || title.toLowerCase().replace(/\s+/g, "-"),
      content,
      image,
      tags,
      author,
    });

    await newBlog.save();
    res.status(201).json(newBlog);
  } catch (err) {
    console.error("Blog creation error:", err);
    res.status(500).json({
      error: "Failed to create blog",
      details: err.message,
    });
  }
});

module.exports = router;
