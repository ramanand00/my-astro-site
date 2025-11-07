import React from "react";
import Navbar from "../components/Navbar";
// import Footer from "../components/Footer";
import { FaJs, FaReact, FaNodeJs, FaHtml5, FaCss3Alt, FaGithub, FaMobileAlt, FaCloud, FaPenAlt, FaSearch, FaChartLine, FaUsers } from "react-icons/fa";
import { SiExpress, SiMongodb, SiTailwindcss, SiTypescript, SiCloudflare, SiCloudinary, SiVercel, SiRender, SiFigma, SiAdobexd } from "react-icons/si";
import { TbSeo } from "react-icons/tb";
import { MdOutlineManageAccounts } from "react-icons/md";

const skills = [
  { name: "JavaScript", level: "Advanced", icon: <FaJs className="text-yellow-400" /> },
  { name: "React.js", level: "Advanced", icon: <FaReact className="text-cyan-400" /> },
  { name: "Node.js", level: "Intermediate", icon: <FaNodeJs className="text-green-600" /> },
  { name: "Express.js", level: "Intermediate", icon: <SiExpress className="text-gray-700 dark:text-gray-200" /> },
  { name: "MongoDB", level: "Intermediate", icon: <SiMongodb className="text-green-700" /> },
  { name: "HTML5", level: "Advanced", icon: <FaHtml5 className="text-orange-600" /> },
  { name: "CSS3", level: "Advanced", icon: <FaCss3Alt className="text-blue-500" /> },
  { name: "Tailwind CSS", level: "Intermediate", icon: <SiTailwindcss className="text-cyan-500" /> },
  { name: "Git & GitHub", level: "Intermediate", icon: <FaGithub className="text-gray-800 dark:text-gray-100" /> },
  { name: "TypeScript", level: "Beginner", icon: <SiTypescript className="text-blue-600" /> },
  { name: "React Native (CLI & Expo)", level: "Intermediate", icon: <FaMobileAlt className="text-purple-500" /> },
  
  // Newly added skills
  { name: "Cloudflare", level: "Intermediate", icon: <SiCloudflare className="text-orange-500" /> },
  { name: "Cloudinary", level: "Intermediate", icon: <SiCloudinary className="text-blue-400" /> },
  { name: "Vercel", level: "Intermediate", icon: <SiVercel className="text-black dark:text-white" /> },
  { name: "Render", level: "Intermediate", icon: <SiRender className="text-blue-500" /> },
  { name: "UI/UX Design", level: "Intermediate", icon: <SiFigma className="text-purple-600" /> },
  { name: "SEO", level: "Intermediate", icon: <TbSeo className="text-blue-600" /> },
  { name: "Project Management", level: "Intermediate", icon: <MdOutlineManageAccounts className="text-green-600" /> },
  { name: "Leadership", level: "Intermediate", icon: <FaUsers className="text-yellow-600" /> },
  { name: "Documentation & Reports", level: "Advanced", icon: <FaPenAlt className="text-gray-600" /> },
  { name: "Research & Analysis", level: "Intermediate", icon: <FaSearch className="text-indigo-600" /> },
  { name: "Technical Writing", level: "Intermediate", icon: <FaPenAlt className="text-blue-500" /> },
];

const learning = [
  { name: "Next.js" },
  { name: "Redux" },
  { name: "Docker" },
  { name: "GraphQL" },
];

export default function Skills() {
  return (
    <>
      <Navbar />
    <section className="min-h-[85vh] flex flex-col items-center justify-center bg-gradient-to-br from-white to-gray-100 dark:from-gray-900 dark:to-gray-800 px-6 py-12">
      <div className="max-w-6xl w-full mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-indigo-600 dark:text-indigo-400 mb-4">
          My Skills
        </h2>
        <p className="text-lg text-gray-700 dark:text-gray-300 mb-8">
          Here are some of the technologies and tools I work with:
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-12">
          {skills.map((skill) => (
            <div
              key={skill.name}
              className="bg-white dark:bg-gray-900 rounded-xl shadow-lg p-6 flex flex-col items-center border border-gray-100 dark:border-gray-800 hover:shadow-xl transition hover:scale-105"
            >
              <div className="mb-3 text-4xl">{skill.icon}</div>
              <span className="text-lg font-semibold text-gray-900 dark:text-white mb-1 text-center">
                {skill.name}
              </span>
              <span className="text-xs px-2 py-1 rounded bg-indigo-50 dark:bg-indigo-900 text-indigo-600 dark:text-indigo-300 font-medium">
                {skill.level}
              </span>
            </div>
          ))}
        </div>
        <div className="mt-8">
          <h3 className="text-2xl font-bold text-indigo-500 dark:text-indigo-300 mb-2">Currently Learning</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {learning.map((item) => (
              <span
                key={item.name}
                className="px-4 py-2 bg-indigo-100 dark:bg-indigo-800 text-indigo-700 dark:text-indigo-200 rounded-full text-sm font-medium shadow"
              >
                {item.name}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
    {/* <Footer/> */}
    </>
  );
}