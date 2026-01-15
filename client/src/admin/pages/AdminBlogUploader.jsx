import React, { useState } from "react";
import axios from "axios";
import { motion } from "framer-motion";

export default function AdminBlogUploader() {
  const [formData, setFormData] = useState({
    title: "",
    slug: "",
    content: "",
    image: "",
    tags: "",
    author: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("https://ramanand-portfolio-backend.vercel.app/api/blogs", formData);
      console.log("Blog uploaded:", response.data);
      alert("Blog posted successfully!");
    } catch (error) {
      console.error("Upload failed:", error);
      alert("Failed to upload blog.");
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 p-6">
      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 gap-6"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        {/* LEFT: FORM */}
        <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg w-full">
          <h2 className="text-3xl font-bold text-indigo-600 dark:text-indigo-400 mb-6">
            📝 Create New Blog
          </h2>
          <form onSubmit={handleSubmit} className="space-y-5">
            {["title", "slug", "image", "tags", "author"].map((field) => (
              <div key={field}>
                <label className="block text-gray-700 dark:text-gray-200 capitalize mb-1">
                  {field}
                </label>
                <input
                  type="text"
                  name={field}
                  value={formData[field]}
                  onChange={handleChange}
                  placeholder={`Enter ${field}`}
                  className="w-full p-3 rounded-lg bg-gray-100 dark:bg-gray-700 text-black dark:text-white"
                  required
                />
              </div>
            ))}

            <div>
              <label className="block text-gray-700 dark:text-gray-200 mb-1">Content</label>
              <textarea
                name="content"
                value={formData.content}
                onChange={handleChange}
                placeholder="Enter blog content"
                rows={6}
                className="w-full p-3 rounded-lg bg-gray-100 dark:bg-gray-700 text-black dark:text-white"
                required
              />
            </div>

            <button
              type="submit"
              className="w-full bg-indigo-600 text-white p-3 rounded-lg hover:bg-indigo-700 transition"
            >
              📤 Post Blog
            </button>
          </form>
        </div>

        {/* RIGHT: PREVIEW */}
        <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg w-full">
          <h3 className="text-xl font-semibold text-indigo-600 dark:text-indigo-400 mb-4">
            🔍 Live Preview
          </h3>
          <div className="prose dark:prose-invert max-w-none">
            <h1>{formData.title || "Blog Title"}</h1>
            <p className="text-sm text-gray-500">by {formData.author || "Author"}</p>
            {formData.image && (
              <img
                src={formData.image}
                alt="Blog Visual"
                loading="lazy"
                className="w-full max-h-64 object-cover my-4 rounded-lg"
              />
            )}
            <p>{formData.content || "Blog content will appear here..."}</p>
            <p className="text-sm mt-4 text-indigo-500">
              Tags: {formData.tags || "tag1, tag2"}
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
