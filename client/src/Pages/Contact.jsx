import React, { useState } from "react";
import axios from "axios";
import Navbar from "../components/Navbar";
// import Footer from "../components/Footer";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaLinkedin,
  FaGithub,
  FaWhatsapp,
  FaTwitter,
  FaFacebook,
  FaRegCopy,
  FaCheck,
  FaInstagram,
} from "react-icons/fa";
import { motion } from "framer-motion";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [loading, setLoading] = useState(false);
  const [successMsg, setSuccessMsg] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const [copied, setCopied] = useState(false);

  const email = "contact@ramanandmandal.com.np";
  const phone = "+977 9827399860";
  const address = "Basundhara Kathmandu Nepal";
  const linkedin = "https://www.linkedin.com/in/ramanand-mandal-24a124324/";
  const github = "https://github.com/ramanand00";
  const whatsapp = "https://wa.me/9779829704557";
  const twitter = "https://x.com/csit_ramanand";
  const facebook = "https://www.facebook.com/ramanand.mandal.np";
  const instagram = "https://www.instagram.com/deepmeaningworld/";

  const handleCopy = (text) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 1200);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSuccessMsg("");
    setErrorMsg("");
    try {
      setLoading(true);
      await axios.post("https://my-astro-site-9n6h.vercel.app/api/contact", form);
      setSuccessMsg("Message sent successfully!");
      setForm({ name: "", email: "", message: "" });
    } catch (err) {
      setErrorMsg("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Navbar />

      <section className="min-h-[85vh] flex flex-col items-center justify-center bg-gradient-to-br from-white to-gray-100 dark:from-gray-900 dark:to-gray-800 px-6 py-12">
        {/* Flex container for details and form */}
        <motion.div
          className="w-full max-w-5xl flex flex-col md:flex-row gap-8 mb-10"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          {/* Contact Info (Left) */}
          <motion.div
            className="w-full md:w-1/2 bg-white dark:bg-gray-900 rounded-xl shadow-xl p-8 flex flex-col justify-center"
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <h3 className="text-2xl font-bold text-indigo-600 dark:text-indigo-400 mb-4 text-center md:text-left">
              Get in Touch
            </h3>
            <div className="space-y-4 text-gray-700 dark:text-gray-300 mb-6">
              <div className="flex items-center gap-3">
                <FaEnvelope className="text-indigo-500" />
                <span>{email}</span>
                <button
                  onClick={() => handleCopy(email)}
                  className="ml-2 text-gray-400 hover:text-indigo-600 transition"
                  title="Copy Email"
                >
                  {copied ? <FaCheck className="text-green-500" /> : <FaRegCopy />}
                </button>
              </div>
              <div className="flex items-center gap-3">
                <FaPhoneAlt className="text-indigo-500" />
                <span>{phone}</span>
                <button
                  onClick={() => handleCopy(phone)}
                  className="ml-2 text-gray-400 hover:text-indigo-600 transition"
                  title="Copy Phone"
                >
                  {copied ? <FaCheck className="text-green-500" /> : <FaRegCopy />}
                </button>
              </div>
              <div className="flex items-center gap-3">
                <FaMapMarkerAlt className="text-indigo-500" />
                <span>{address}</span>
              </div>
              <div className="flex flex-wrap items-center gap-3">
                <a
                  href={linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center hover:text-indigo-600 transition"
                >
                  <FaLinkedin className="mr-2" /> LinkedIn
                </a>
                <a
                  href={github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center hover:text-indigo-600 transition"
                >
                  <FaGithub className="ml-4 mr-2" /> GitHub
                </a>
                <a
                  href={twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center hover:text-indigo-600 transition"
                >
                  <FaTwitter className="ml-4 mr-2" /> Twitter
                </a>
                <a
                  href={whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center hover:text-green-600 transition"
                  title="WhatsApp"
                >
                  <FaWhatsapp className="ml-4 mr-2" /> WhatsApp
                </a>
                <a
                  href={facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center hover:text-blue-700 transition"
                  title="Facebook"
                >
                  <FaFacebook className="ml-4 mr-2" /> Facebook
                </a>
                <a
                  href={instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center hover:text-pink-500 transition"
                  title="Instagram"
                >
                  <FaInstagram className="ml-4 mr-2" /> Instagram
                </a>
              </div>
            </div>
          </motion.div>

          {/* Contact Form (Right) */}
          <motion.div
            className="w-full md:w-1/2 bg-white dark:bg-gray-900 rounded-xl shadow-xl p-8"
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.4 }}
          >
            <h2 className="text-3xl font-bold text-center text-indigo-600 dark:text-indigo-400 mb-6">
              Contact Me
            </h2>
            {successMsg && (
              <div className="mb-4 text-green-600 bg-green-50 dark:bg-green-900 dark:text-green-200 rounded p-2 text-center">
                {successMsg}
              </div>
            )}
            {errorMsg && (
              <div className="mb-4 text-red-600 bg-red-50 dark:bg-red-900 dark:text-red-200 rounded p-2 text-center">
                {errorMsg}
              </div>
            )}
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Name
                </label>
                <input
                  type="text"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  placeholder="Your full name"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  placeholder="you@example.com"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Message
                </label>
                <textarea
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  rows="4"
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  placeholder="Write your message..."
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                disabled={loading}
                className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-2 rounded-lg transition disabled:opacity-50"
              >
                {loading ? "Sending..." : "Send Message"}
              </button>
            </form>
          </motion.div>
        </motion.div>

        {/* Map below both columns */}
        <motion.div
          className="w-full max-w-5xl bg-white dark:bg-gray-900 rounded-xl shadow-xl p-4"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.6 }}
        >
          <iframe
            title="Google Map"
            src="https://www.google.com/maps?q=27.7477045,85.3219936&z=15&output=embed"
            width="100%"
            height="300"
            className="rounded-lg border-0"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </motion.div>
      </section>

      {/* <Footer /> */}
    </>
  );
}