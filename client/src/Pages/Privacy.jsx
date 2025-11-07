import React, { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
// import Footer from "../components/Footer";

const sectionVariant = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.5,
      ease: "easeOut",
    },
  }),
};

const sections = [
  {
    id: "intro",
    title: "1. Introduction",
    content:
      "We are committed to protecting your privacy. This policy explains how we collect, use, and safeguard your personal information when you use our blogging platform.",
  },
  {
    id: "data-collection",
    title: "2. Data We Collect",
    content:
      "We collect information you provide when creating an account, publishing content, or interacting with others. This may include your name, email, profile information, and any content you post.",
  },
  {
    id: "cookies",
    title: "3. Cookies & Tracking",
    content:
      "We use cookies to enhance your experience, analyze usage, and deliver personalized content. You can control cookies through your browser settings.",
  },
  {
    id: "data-use",
    title: "4. How We Use Your Data",
    content:
      "Your information helps us operate the platform, improve services, communicate with you, and ensure security. We never sell your personal data to third parties.",
  },
  {
    id: "sharing",
    title: "5. Data Sharing",
    content:
      "We may share anonymized analytics with partners. Your published content is publicly visible according to your privacy settings. We only disclose personal information when required by law.",
  },
  {
    id: "security",
    title: "6. Data Security",
    content:
      "We implement industry-standard security measures to protect your information. However, no online platform can guarantee absolute security.",
  },
  {
    id: "rights",
    title: "7. Your Rights",
    content:
      "You can access, update, or delete your personal data through your account settings. You may also request a copy of your data or ask us to stop processing it.",
  },
  {
    id: "children",
    title: "8. Children's Privacy",
    content:
      "Our platform is not intended for users under 13. We do not knowingly collect data from children without parental consent.",
  },
  {
    id: "changes",
    title: "9. Policy Changes",
    content:
      "We may update this policy periodically. Significant changes will be notified through your registered email or platform announcements.",
  },
  {
    id: "contact",
    title: "10. Contact Us",
    content:
      "For privacy concerns or questions, contact our Data Protection Officer at contact@ramanandmandal.com.np.",
  },
];

const PrivacyPolicy = () => {
  const [agreed, setAgreed] = useState(false);
  const contentRef = useRef(null);

  const handleScroll = () => {
    const bottom =
      contentRef.current.getBoundingClientRect().bottom <= window.innerHeight;
    if (bottom) setAgreed(true);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
        <Navbar />

    <div className="min-h-screen bg-indigo-100 dark:bg-indigo-900 transition-colors duration-500 py-10 px-4">
      {/* Header */}
      
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="max-w-5xl mx-auto text-center"
      >
        <h1 className="text-4xl font-bold text-indigo-700 dark:text-indigo-300 mb-3">
          Privacy Policy
        </h1>
        <p className="text-indigo-600 dark:text-indigo-200 text-lg">
          How we collect, use, and protect your personal information
        </p>
      </motion.div>

      {/* Main Layout */}
      <div className="max-w-6xl mx-auto mt-10 grid md:grid-cols-4 gap-10">
        {/* Sidebar TOC */}
        <aside className="sticky top-20 hidden md:block">
          <div className="bg-white dark:bg-indigo-800 p-4 rounded-xl shadow">
            <h3 className="text-lg font-semibold text-indigo-700 dark:text-indigo-300 mb-3">
              Sections
            </h3>
            <ul className="space-y-2">
              {sections.map((section) => (
                <li key={section.id}>
                  <a
                    href={`#${section.id}`}
                    className="text-sm text-indigo-600 dark:text-indigo-200 hover:underline"
                  >
                    {section.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </aside>

        {/* Content */}
        <section
          ref={contentRef}
          className="md:col-span-3 space-y-10 transition-colors"
        >
          {sections.map((section, i) => (
            <motion.div
              key={section.id}
              id={section.id}
              custom={i}
              variants={sectionVariant}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="bg-white dark:bg-indigo-800 p-6 rounded-2xl shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <h2 className="text-2xl font-bold text-indigo-700 dark:text-indigo-300 mb-2">
                {section.title}
              </h2>
              <p className="text-indigo-600 dark:text-indigo-200 leading-relaxed">
                {section.content}
              </p>
            </motion.div>
          ))}

          {/* Agree Button */}
          <div className="text-center pt-10">
            <button
              disabled={!agreed}
              className={`px-6 py-3 rounded-full font-semibold text-white transition-all ${
                agreed
                  ? "bg-indigo-600 hover:bg-indigo-700"
                  : "bg-indigo-300 cursor-not-allowed"
              }`}
            >
              {agreed ? "I Acknowledge & Continue" : "Scroll to Acknowledge"}
            </button>
          </div>
        </section>
      </div>

      <p className="text-center mt-16 text-sm text-indigo-500 dark:text-indigo-200">
        Last Updated: July 26, 2025
      </p>
    </div>
    {/* <Footer /> */}
    </>
  );
};

export default PrivacyPolicy;