import React from "react";
import Navbar from "../components/Navbar";
// import Footer from "../components/Footer";

const projects = [
  {
    title: "Portfolio Website",
    description: "A personal portfolio site built with React, Tailwind CSS, and Express.js to showcase my work and contact me.",
    tech: ["React", "Tailwind CSS", "Node.js"],
    github: "https://github.com/ramanand00",
    demo: "#",
  },
  {
    title: "SmartCSIT App",
    description: "A mobile app for CSIT students with notes, planners, AI assistant and notifications. Built using React Native.",
    tech: ["React Native", "Firebase"],
    github: "https://github.com/ramanand00",
    demo: "#",
  },
  {
    title: "Blogging Platform",
    description: "A full-featured MERN blog platform with admin dashboard, post editing, image upload and search functionality.",
    tech: ["React", "Node.js", "MongoDB"],
    github: "https://github.com/ramanand00",
    demo: "#",
  },
];

export default function Projects() {
  return (
    <>
      <Navbar />

      <section className="min-h-[100vh] px-6 py-12 bg-gradient-to-br from-white to-gray-100 dark:from-gray-900 dark:to-gray-800">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-indigo-600 dark:text-indigo-400 mb-10">
            Projects
          </h2>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {projects.map((project, index) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-xl shadow p-6 flex flex-col justify-between"
              >
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                    {project.title}
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech, i) => (
                      <span
                        key={i}
                        className="text-sm px-3 py-1 rounded-full bg-indigo-100 dark:bg-indigo-800 text-indigo-800 dark:text-indigo-100"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="mt-auto flex justify-between">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-indigo-600 hover:underline dark:text-indigo-400"
                  >
                    GitHub
                  </a>
                  {project.demo !== "#" && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-indigo-600 hover:underline dark:text-indigo-400"
                    >
                      Live Demo
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* <Footer /> */}
    </>
  );
}
