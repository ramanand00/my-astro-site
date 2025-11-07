import React from "react";
import Navbar from "../components/Navbar";
// import Footer from "../components/Footer";
import profileImg from "../assets/About.jpg";
import { FaReact, FaNodeJs, FaGithub, FaLinkedin, FaHtml5, FaCss3Alt, FaJs, FaGraduationCap, FaSchool, FaUniversity, FaFilePdf } from "react-icons/fa";
import { SiTailwindcss, SiMongodb, SiExpress } from "react-icons/si";

export default function About() {
  return (
    <>
      <Navbar />

      <section className="min-h-[100vh] px-6 py-12 bg-gradient-to-br from-white to-gray-100 dark:from-gray-900 dark:to-gray-800">
        <div className="max-w-4xl mx-auto">
          {/* Profile Image - Centered at top */}
          <div className="flex justify-center mb-8 animate-fade-in">
            <div className="w-64 h-64 rounded-xl overflow-hidden bg-white flex items-center justify-center shadow-lg border-4 border-white dark:border-gray-800">
              <img
                src={profileImg}
                alt="Ramanand Mandal"
                loading="lazy"
                className="object-cover w-full h-full scale-100 hover:scale-110 transition-transform duration-700"
              />
            </div>
          </div>
          
          {/* About Content - Centered */}
          <div className="text-center animate-slide-up">
            <h2 className="text-3xl sm:text-4xl font-bold text-indigo-600 dark:text-indigo-400 mb-6 transition-colors duration-500">
              About Me
            </h2>
            
            <div className="space-y-6 text-left max-w-3xl mx-auto">
              <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed transition-opacity duration-700 delay-100 animate-fade-in">
               Hey there 👋 <strong>I’m Ramanand Mandal</strong>, a curious soul from Saptari, Nepal, who fell in love with technology not just for what it can do — but for how it can change lives.
              </p>
              <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed transition-opacity duration-700 delay-200 animate-fade-in">
               I’m not your typical developer who only writes code; I’m a dreamer who builds ideas into digital reality. From designing creative UIs to developing full-stack applications, I love turning imagination into something people can see, touch, and use.
              </p>
              <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed transition-opacity duration-700 delay-300 animate-fade-in">
               My journey began with curiosity — how can a few lines of code build something powerful enough to connect millions? That question pushed me into the world of web development, AI, and innovation.
              </p>
              {/* <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed transition-opacity duration-700 delay-400 animate-fade-in">
                Beyond coding, I'm the founder of <strong>Riseup-Tech</strong>, a growing initiative focused on creating AI-powered social learning platforms and innovative digital tools that empower students and developers to rise up in their careers. Through projects like Riseup-Connect, Fast-Joints, and Pharma-Hub, I've learned how to blend technology, creativity, and community into meaningful digital experiences.
              </p> */}
              <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed transition-opacity duration-700 delay-500 animate-fade-in">
               To build smart, inclusive, and inspiring digital spaces where people learn, grow, and rise together.
I believe technology isn’t just about machines — it’s about people, and how we can use innovation to make life a little better every day.
              </p>
              <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed transition-opacity duration-700 delay-600 animate-fade-in">
                My vision is to become a global software engineer and innovator who contributes to building a smarter, connected world — starting from Nepal. 🌏
              </p>
              <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed transition-opacity duration-700 delay-700 animate-fade-in">
                I don’t see coding as just logic and syntax; to me, it’s a language of creation — a way to express ideas, solve problems, and make something meaningful. Whether it’s crafting a responsive website, building an AI feature, or helping others learn — I pour my creativity and purpose into everything I do.
              </p>
            </div>

            {/* Education Section */}
            <div className="mt-12 mb-8 animate-fade-in delay-800 text-left max-w-3xl mx-auto">
              <h3 className="text-2xl font-bold text-indigo-500 dark:text-indigo-300 mb-6 text-center">Education</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg text-center">
                  <FaUniversity className="text-indigo-500 text-3xl mx-auto mb-3" />
                  <h4 className="font-semibold text-gray-800 dark:text-gray-200 mb-2">Academia International College</h4>
                  <p className="text-gray-600 dark:text-gray-400 text-sm mb-1">Gwarkho, Kathmandu</p>
                  <p className="text-xs text-gray-500 dark:text-gray-400">BSc.CSIT (Running)</p>
                </div>
                <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg text-center">
                  <FaGraduationCap className="text-green-500 text-3xl mx-auto mb-3" />
                  <h4 className="font-semibold text-gray-800 dark:text-gray-200 mb-2">Herald International College</h4>
                  <p className="text-gray-600 dark:text-gray-400 text-sm mb-1">Basundhara, Kathmandu</p>
                  <p className="text-xs text-gray-500 dark:text-gray-400">+2 Science   2081 BS (2024 AD)</p>
                </div>
                <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg text-center">
                  <FaSchool className="text-blue-500 text-3xl mx-auto mb-3" />
                  <h4 className="font-semibold text-gray-800 dark:text-gray-200 mb-2">Shree Public Secondary School</h4>
                  <p className="text-gray-600 dark:text-gray-400 text-sm mb-1">Launiya Tilathi, Saptari</p>
                  <p className="text-xs text-gray-500 dark:text-gray-400">SEE   2078 BS (2022 AD)</p>
                </div>
              </div>
            </div>

            {/* What Defines Me Section */}
            <div className="mt-8 mb-8 animate-fade-in delay-900 text-left max-w-3xl mx-auto">
              <h3 className="text-2xl font-bold text-indigo-500 dark:text-indigo-300 mb-6 text-center">💡 What Defines Me</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex items-center gap-3 bg-white dark:bg-gray-800 rounded-lg p-4 shadow">
                  <div className="w-3 h-3 bg-indigo-500 rounded-full flex-shrink-0"></div>
                  <span className="text-gray-700 dark:text-gray-300">Passionate about technology and innovation</span>
                </div>
                <div className="flex items-center gap-3 bg-white dark:bg-gray-800 rounded-lg p-4 shadow">
                  <div className="w-3 h-3 bg-indigo-500 rounded-full flex-shrink-0"></div>
                  <span className="text-gray-700 dark:text-gray-300">Dedicated to continuous learning and creativity</span>
                </div>
                <div className="flex items-center gap-3 bg-white dark:bg-gray-800 rounded-lg p-4 shadow">
                  <div className="w-3 h-3 bg-indigo-500 rounded-full flex-shrink-0"></div>
                  <span className="text-gray-700 dark:text-gray-300">Believer in education, community, and self-growth</span>
                </div>
                <div className="flex items-center gap-3 bg-white dark:bg-gray-800 rounded-lg p-4 shadow">
                  <div className="w-3 h-3 bg-indigo-500 rounded-full flex-shrink-0"></div>
                  <span className="text-gray-700 dark:text-gray-300">Focused on building solutions that help others rise up</span>
                </div>
              </div>
            </div>

            {/* Social Links & CV */}
            <div className="flex justify-center gap-6 mt-8 animate-fade-in delay-1000">
              <a
                href="https://github.com/ramanand00"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
                title="GitHub"
              >
                <FaGithub size={28} className="hover:scale-125 transition-transform duration-300" />
              </a>
              <a
                href="https://www.linkedin.com/in/ramanand-mandal-24a124324/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
                title="LinkedIn"
              >
                <FaLinkedin size={28} className="hover:scale-125 transition-transform duration-300" />
              </a>
              <a
                href="https://drive.google.com/file/d/1Hin5gNeNgdr8dKrC9R5SAy21LdDtDYiI/view"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-medium shadow-md hover:shadow-xl hover:scale-105 hover:brightness-110 transition-all duration-300 ease-in-out glow-on-hover"
              >
                <FaFilePdf size={18} className="text-white drop-shadow-sm" />
                View CV
              </a>
            </div>

            {/* Tech Stack */}
            <div className="flex flex-wrap gap-3 mt-10 justify-center animate-fade-in delay-1100">
              <span className="flex items-center gap-1 px-3 py-1 bg-indigo-100 dark:bg-indigo-900 text-indigo-700 dark:text-indigo-300 rounded-full text-xs font-semibold animate-bounce-slow">
                <FaReact /> React
              </span>
              <span className="flex items-center gap-1 px-3 py-1 bg-green-100 dark:bg-green-900 text-green-700 dark:text-green-300 rounded-full text-xs font-semibold animate-bounce-slow delay-100">
                <FaNodeJs /> Node.js
              </span>
              <span className="flex items-center gap-1 px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-200 rounded-full text-xs font-semibold animate-bounce-slow delay-200">
                <SiExpress /> Express.js
              </span>
              <span className="flex items-center gap-1 px-3 py-1 bg-green-100 dark:bg-green-900 text-green-700 dark:text-green-300 rounded-full text-xs font-semibold animate-bounce-slow delay-300">
                <SiMongodb /> MongoDB
              </span>
              <span className="flex items-center gap-1 px-3 py-1 bg-cyan-100 dark:bg-cyan-900 text-cyan-700 dark:text-cyan-300 rounded-full text-xs font-semibold animate-bounce-slow delay-400">
                <SiTailwindcss /> Tailwind CSS
              </span>
              <span className="flex items-center gap-1 px-3 py-1 bg-yellow-100 dark:bg-yellow-900 text-yellow-700 dark:text-yellow-300 rounded-full text-xs font-semibold animate-bounce-slow delay-500">
                <FaJs /> JavaScript
              </span>
              <span className="flex items-center gap-1 px-3 py-1 bg-orange-100 dark:bg-orange-900 text-orange-700 dark:text-orange-300 rounded-full text-xs font-semibold animate-bounce-slow delay-600">
                <FaHtml5 /> HTML5
              </span>
              <span className="flex items-center gap-1 px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 rounded-full text-xs font-semibold animate-bounce-slow delay-700">
                <FaCss3Alt /> CSS3
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Tailwind custom animation styles */}
      <style>
        {`
          .glow-on-hover:hover {
            box-shadow: 0 0 10px rgba(138, 43, 226, 0.6), 0 0 20px rgba(138, 43, 226, 0.4);
          }

          @keyframes fade-in {
            from { opacity: 0; transform: translateY(20px); }
            to { opacity: 1; transform: translateY(0); }
          }

          .animate-fade-in {
            animation: fade-in 0.8s ease-out forwards;
          }

          @keyframes slide-up {
            from { opacity: 0; transform: translateY(60px); }
            to { opacity: 1; transform: translateY(0); }
          }

          .animate-slide-up {
            animation: slide-up 1.2s cubic-bezier(.4,0,.2,1) both;
          }

          @keyframes bounce-slow {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(-8px); }
          }

          .animate-bounce-slow {
            animation: bounce-slow 2.5s infinite;
          }

          .delay-100 { animation-delay: 0.1s; }
          .delay-200 { animation-delay: 0.2s; }
          .delay-300 { animation-delay: 0.3s; }
          .delay-400 { animation-delay: 0.4s; }
          .delay-500 { animation-delay: 0.5s; }
          .delay-600 { animation-delay: 0.6s; }
          .delay-700 { animation-delay: 0.7s; }
          .delay-800 { animation-delay: 0.8s; }
          .delay-900 { animation-delay: 0.9s; }
          .delay-1000 { animation-delay: 1.0s; }
          .delay-1100 { animation-delay: 1.1s; }
        `}
      </style>
    </>
  );
}