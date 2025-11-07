import React from "react";
import { Link } from "react-router-dom";
import { FaGithub, FaLinkedin, FaArrowRight, FaEnvelope, FaDownload } from "react-icons/fa";
import Navbar from "../components/Navbar";
// import Footer from "../components/Footer";
// import profileImg from "../assets/profile.jpg"; 

export default function Home() {
  return (
    <>
      <Navbar />

      <section className="min-h-[100vh] flex items-center justify-center bg-gradient-to-br from-white to-gray-100 dark:from-gray-900 dark:to-gray-800 px-6">
        <div className="max-w-4xl mx-auto text-center flex flex-col items-center">
          {/* Profile Image */}
          <img
  src="/images/pp.jpg"
  alt="Ramanand Mandal"
  loading="lazy"
  className="w-32 h-32 rounded-full object-cover border-4 border-indigo-500 shadow-lg mb-6"
/>

          {/* Intro */}
          <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 dark:text-white leading-tight mb-4">
            Hi, I'm{" "}
            <span className="text-indigo-600 dark:text-indigo-400">Ramanand Mandal</span>
          </h1>
          <p className="text-lg sm:text-xl text-gray-700 dark:text-gray-300 mb-6">
            A passionate <strong>Full-Stack Developer</strong> who loves building
            beautiful &amp; performant web apps.
          </p>

          {/* More About Me */}
          <div className="max-w-2xl mx-auto mb-8">
            {/* <p className="text-base sm:text-lg text-gray-600 dark:text-gray-400 mb-2">
              I have a strong background in the MERN stack and enjoy working on both frontend and backend projects. My journey in tech started with curiosity and has grown into a deep passion for solving real-world problems through code.
            </p> */}
            <p className="text-base sm:text-lg text-gray-600 dark:text-gray-400 mb-2">
              I love collaborating with teams, learning new technologies, and sharing knowledge with the community. When I'm not coding, you can find me exploring new tools, reading about AI, or contributing to open-source projects.
            </p>
            <p className="text-base sm:text-lg text-gray-600 dark:text-gray-400">
              My goal is to build impactful digital products and continuously grow as a developer and a person.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <Link
              to="/projects"
              className="inline-flex items-center px-5 py-3 text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 rounded-lg transition"
            >
              View Projects <FaArrowRight className="ml-2" />
            </Link>
            <a
              href="mailto:contact@ramanandmandal.com.np"
              className="inline-flex items-center px-5 py-3 text-sm font-medium text-indigo-600 border border-indigo-600 hover:bg-indigo-50 dark:hover:bg-gray-800 rounded-lg transition"
            >
              <FaEnvelope className="mr-2" /> Contact Me
            </a>
            <a
              href="/resume.pdf"
              download
              className="inline-flex items-center px-5 py-3 text-sm font-medium text-indigo-600 border border-indigo-600 hover:bg-indigo-50 dark:hover:bg-gray-800 rounded-lg transition"
            >
              <FaDownload className="mr-2" /> Download Resume
            </a>
          </div>

          {/* Social Links */}
          <div className="flex justify-center space-x-6 text-gray-600 dark:text-gray-400 mb-8">
            <a
              href="https://github.com/ramanand00"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
            >
              <FaGithub size={24} />
            </a>
            <a
              href="https://www.linkedin.com/in/ramanand-mandal-24a124324/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
            >
              <FaLinkedin size={24} />
            </a>
          </div>

          {/* Tech Stack */}
          <div className="flex flex-wrap justify-center gap-4 mt-4">
            <span className="px-3 py-1 bg-indigo-100 dark:bg-indigo-900 text-indigo-700 dark:text-indigo-300 rounded-full text-xs font-semibold">React</span>
            <span className="px-3 py-1 bg-indigo-100 dark:bg-indigo-900 text-indigo-700 dark:text-indigo-300 rounded-full text-xs font-semibold">React Native</span>
            <span className="px-3 py-1 bg-indigo-100 dark:bg-indigo-900 text-indigo-700 dark:text-indigo-300 rounded-full text-xs font-semibold">Node.js</span>
            <span className="px-3 py-1 bg-indigo-100 dark:bg-indigo-900 text-indigo-700 dark:text-indigo-300 rounded-full text-xs font-semibold">MongoDB</span>
            <span className="px-3 py-1 bg-indigo-100 dark:bg-indigo-900 text-indigo-700 dark:text-indigo-300 rounded-full text-xs font-semibold">Tailwind CSS</span>
            <span className="px-3 py-1 bg-indigo-100 dark:bg-indigo-900 text-indigo-700 dark:text-indigo-300 rounded-full text-xs font-semibold">Express.js</span>
            <span className="px-3 py-1 bg-indigo-100 dark:bg-indigo-900 text-indigo-700 dark:text-indigo-300 rounded-full text-xs font-semibold">JavaScript</span>
          </div>
        </div>
      </section>

      {/* <Footer /> */}
    </>
  );
}
