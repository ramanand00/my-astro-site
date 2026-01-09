import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams, Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import { motion } from "framer-motion";
import { FaUser, FaCalendarAlt, FaArrowLeft } from "react-icons/fa";

export default function BlogDetails() {
  const { id } = useParams();
  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .get(`https://my-astro-site-9n6h.vercel.app/api/blogs/${id}`)
      .then((res) => {
        setBlog(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setError("Failed to load blog post.");
        setLoading(false);
      });
  }, [id]);

  if (loading) {
    return (
      <>
        <Navbar />
        <p className="p-10 text-center text-lg text-gray-500 dark:text-gray-400">
          Loading blog...
        </p>
      </>
    );
  }

  if (error || !blog) {
    return (
      <>
        <Navbar />
        <p className="p-10 text-center text-lg text-red-500">
          {error || "Blog not found."}
        </p>
        <div className="text-center">
          <Link
            to="/blogs"
            className="inline-flex items-center mt-4 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold px-5 py-2 rounded-lg transition"
          >
            <FaArrowLeft className="mr-2" />
            Back to Blogs
          </Link>
        </div>
      </>
    );
  }

  return (
    <>
      <Navbar />
      <section className="min-h-[90vh] bg-gradient-to-br from-white to-gray-100 dark:from-gray-900 dark:to-gray-800 px-6 py-16 w-full">
        <motion.article
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-white dark:bg-gray-900 rounded-3xl shadow-xl p-10 md:p-14 max-w-5xl mx-auto"
        >
          {/* Image with zoom & shadow */}
          {blog.image && (
            <div className="overflow-hidden rounded-2xl mb-10 shadow-lg cursor-pointer group">
              <img
                src={blog.image}
                alt={blog.title}
                loading="lazy"
                className="w-full max-h-96 object-cover rounded-2xl transition-transform duration-500 group-hover:scale-105"
              />
            </div>
          )}

          {/* Title with gradient text */}
          <h1 className="relative text-5xl md:text-6xl font-extrabold text-indigo-700 dark:text-indigo-400 mb-6">
            <span className="bg-gradient-to-r from-indigo-500 via-purple-600 to-pink-600 bg-clip-text text-transparent">
              {blog.title}
            </span>
          </h1>

          {/* Author & date badges */}
          <div className="flex flex-wrap items-center gap-6 text-gray-600 dark:text-gray-400 text-sm mb-8">
            <div className="flex items-center space-x-2 bg-indigo-100 dark:bg-indigo-800 px-3 py-1 rounded-full shadow-sm">
              <FaUser />
              <span className="font-medium">{blog.author || "Unknown"}</span>
            </div>
            <div className="flex items-center space-x-2 bg-indigo-100 dark:bg-indigo-800 px-3 py-1 rounded-full shadow-sm">
              <FaCalendarAlt />
              <time dateTime={blog.createdAt}>
                {new Date(blog.createdAt).toLocaleDateString(undefined, {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </time>
            </div>
          </div>

          {/* Decorative divider */}
          <hr className="border-indigo-300 dark:border-indigo-700 mb-10" />

          {/* Blog content */}
          <div
            className="prose prose-indigo dark:prose-invert max-w-none text-gray-800 dark:text-gray-200 leading-relaxed"
            style={{ whiteSpace: "pre-line" }}
          >
            {blog.content}
          </div>

          {/* Back button */}
          <div className="mt-16 text-center">
            <Link
              to="/blogs"
              className="inline-flex items-center bg-indigo-600 hover:bg-indigo-700 text-white font-semibold px-8 py-3 rounded-lg shadow-lg transition"
            >
              <FaArrowLeft className="mr-3" />
              Back to Blogs
            </Link>
          </div>
        </motion.article>
      </section>
    </>
  );
}
