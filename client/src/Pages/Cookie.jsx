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
    id: "what-are-cookies",
    title: "1. What Are Cookies?",
    content:
      "Cookies are small text files stored on your device when you visit websites. They help websites remember information about your visit, which can make it easier to visit the site again and make the site more useful to you.",
  },
  {
    id: "how-we-use",
    title: "2. How We Use Cookies",
    content:
      "We use cookies to: authenticate users, remember your preferences, analyze site traffic and usage patterns, enable social media features, and personalize content. Some cookies are essential for the website to function properly.",
  },
  {
    id: "types-of-cookies",
    title: "3. Types of Cookies We Use",
    content: (
      <ul className="list-disc pl-5 space-y-2">
        <li><strong>Strictly Necessary:</strong> Required for basic functions like page navigation</li>
        <li><strong>Preferences:</strong> Remember your choices (like language or region)</li>
        <li><strong>Analytics:</strong> Help us understand how visitors interact with our site</li>
        <li><strong>Marketing:</strong> Used to deliver relevant ads (we use these only with consent)</li>
        <li><strong>Social Media:</strong> Enable sharing content on social platforms</li>
      </ul>
    ),
  },
  {
    id: "third-party",
    title: "4. Third-Party Cookies",
    content:
      "We may use services like Google Analytics that set their own cookies to provide analytics, advertising, and social media features. These third parties have their own privacy policies.",
  },
  {
    id: "managing-cookies",
    title: "5. Managing Cookies",
    content:
      "You can control cookies through your browser settings. Most browsers allow you to block or delete cookies. However, disabling essential cookies may affect website functionality. Our cookie consent banner lets you choose which non-essential cookies to accept.",
  },
  {
    id: "changes",
    title: "6. Changes to This Policy",
    content:
      "We may update our Cookies Policy periodically. We'll notify you of significant changes through our website or other communication channels.",
  },
  {
    id: "contact",
    title: "7. Contact Us",
    content:
      "For questions about our use of cookies, please contact us at contact@ramanandmandal.com.np.",
  },
];

const CookiesPolicy = () => {
  const [agreed, setAgreed] = useState(false);
  const [consentGiven, setConsentGiven] = useState(false);
  const [selectedCookies, setSelectedCookies] = useState({
    necessary: true,
    preferences: false,
    analytics: false,
    marketing: false,
    social: false,
  });
  const contentRef = useRef(null);

  const handleScroll = () => {
    const bottom =
      contentRef.current.getBoundingClientRect().bottom <= window.innerHeight;
    if (bottom) setAgreed(true);
  };

  const handleConsentChange = (type) => {
    if (type === 'necessary') return; // Can't disable necessary cookies
    setSelectedCookies(prev => ({
      ...prev,
      [type]: !prev[type]
    }));
  };

  const saveConsent = () => {
    // In a real implementation, you would save these preferences
    setConsentGiven(true);
    // Hide the consent banner after saving
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
    <Navbar />
    <div className="min-h-screen bg-indigo-100 dark:bg-indigo-900 transition-colors duration-500 py-10 px-4">
      {/* Cookie Consent Banner - appears only if consent hasn't been given */}
      {!consentGiven && (
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="fixed bottom-0 left-0 right-0 bg-white dark:bg-indigo-800 shadow-lg p-4 z-50"
        >
          <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-indigo-600 dark:text-indigo-200 text-sm md:text-base">
              We use cookies to enhance your experience. By continuing to browse, you agree to our use of necessary cookies. 
              You can manage preferences below.
            </p>
            <div className="flex gap-3">
              <button 
                onClick={() => {
                  setSelectedCookies({
                    necessary: true,
                    preferences: true,
                    analytics: true,
                    marketing: true,
                    social: true,
                  });
                  saveConsent();
                }}
                className="px-4 py-2 text-sm rounded-full bg-indigo-600 text-white"
              >
                Accept All
              </button>
              <button 
                onClick={saveConsent}
                className="px-4 py-2 text-sm rounded-full bg-indigo-100 dark:bg-indigo-700 text-indigo-700 dark:text-indigo-200"
              >
                Save Preferences
              </button>
            </div>
          </div>
        </motion.div>
      )}

      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="max-w-5xl mx-auto text-center"
      >
        <h1 className="text-4xl font-bold text-indigo-700 dark:text-indigo-300 mb-3">
          Cookies Policy
        </h1>
        <p className="text-indigo-600 dark:text-indigo-200 text-lg">
          Learn how we use cookies to improve your experience
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
          {/* Cookie Preferences Section at the top */}
          <motion.div
            className="bg-white dark:bg-indigo-800 p-6 rounded-2xl shadow-md hover:shadow-lg transition-shadow duration-300"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={sectionVariant}
          >
            <h2 className="text-2xl font-bold text-indigo-700 dark:text-indigo-300 mb-4">
              Your Cookie Preferences
            </h2>
            <div className="space-y-4">
              {Object.entries(selectedCookies).map(([type, enabled]) => (
                <div key={type} className="flex items-center justify-between">
                  <div>
                    <h3 className="font-medium text-indigo-700 dark:text-indigo-200 capitalize">
                      {type} Cookies
                    </h3>
                    <p className="text-sm text-indigo-500 dark:text-indigo-300">
                      {type === 'necessary' ? 'Always enabled' : 'Optional'}
                    </p>
                  </div>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input
                      type="checkbox"
                      checked={enabled}
                      onChange={() => handleConsentChange(type)}
                      disabled={type === 'necessary'}
                      className="sr-only peer"
                    />
                    <div className="w-11 h-6 bg-indigo-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-indigo-600"></div>
                  </label>
                </div>
              ))}
            </div>
            <button
              onClick={saveConsent}
              className="mt-6 px-6 py-2 rounded-full font-semibold text-white bg-indigo-600 hover:bg-indigo-700 transition-colors"
            >
              Update Preferences
            </button>
          </motion.div>

          {/* Policy Sections */}
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
              <div className="text-indigo-600 dark:text-indigo-200 leading-relaxed">
                {section.content}
              </div>
            </motion.div>
          ))}

          {/* Acknowledge Button */}
          <div className="text-center pt-10">
            <button
              disabled={!agreed}
              className={`px-6 py-3 rounded-full font-semibold text-white transition-all ${
                agreed
                  ? "bg-indigo-600 hover:bg-indigo-700"
                  : "bg-indigo-300 cursor-not-allowed"
              }`}
            >
              {agreed ? "I Understand" : "Scroll to Acknowledge"}
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

export default CookiesPolicy;