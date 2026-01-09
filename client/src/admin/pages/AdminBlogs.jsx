import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Navbar from "../../components/Navbar";
import { motion } from "framer-motion";

export default function Blogs() {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get("https://my-astro-site-9n6h.vercel.app/api/blogs")
      .then(res => {
        setBlogs(res.data);
        setLoading(false);
      })
      .catch(err => {
        console.error(err);
        setLoading(false);
      });
  }, []);

  if (loading)
    return <p className="p-10 text-center text-lg text-gray-500 dark:text-gray-400">Loading blogs...</p>;

  if (!blogs.length)
    return <p className="p-10 text-center text-lg text-gray-500 dark:text-gray-400">you Have not posted Any Blogs Yet</p>;

  return (
    <>
      <Navbar />
      <section className="min-h-[90vh] bg-gradient-to-br from-white to-gray-100 dark:from-gray-900 dark:to-gray-800 px-6 py-12">
        <motion.h1
          className="text-4xl md:text-5xl font-extrabold text-center text-indigo-700 dark:text-indigo-400 mb-12"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          📝 Admin Blog Posts
        </motion.h1>

        <div className="max-w-7xl mx-auto grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogs.map((blog, index) => (
            <motion.div
              key={blog._id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white dark:bg-gray-900 rounded-2xl shadow-lg hover:shadow-2xl transition duration-300 overflow-hidden flex flex-col"
            >
              {/* Optional image section */}
              {blog.image && (
                <img
                  src={blog.image}
                  alt={blog.title}
                  loading="lazy"
                  className="w-full h-48 object-cover"
                />
              )}

              <div className="p-6 flex flex-col flex-grow">
                <Link
                  to={`/blog/${blog._id}`}
                  className="text-2xl font-bold text-indigo-600 dark:text-indigo-400 hover:underline"
                >
                  {blog.title}
                </Link>
                <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
                  By <span className="font-medium">{blog.author || "Unknown"}</span> •{" "}
                  {new Date(blog.createdAt).toLocaleDateString()}
                </p>

                <p className="mt-4 text-gray-700 dark:text-gray-300 line-clamp-4 flex-grow">
                  {blog.content.slice(0, 250)}...
                </p>

                <div className="mt-4">
                  <Link
                    to={`/blog/${blog._id}`}
                    className="inline-block bg-indigo-600 hover:bg-indigo-700 text-white font-semibold px-4 py-2 rounded-lg transition"
                  >
                    Read More →
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </>
  );
}
