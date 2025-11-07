import { useEffect, useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import axios from "axios";
import {
  FiUser,
  FiBook,
  FiFolder,
  FiCode,
  FiMail,
  FiHome
} from "react-icons/fi";

const navItems = [
  { name: "About", path: "/about", icon: FiUser },
  { name: "Blogs", path: "/blogs", icon: FiBook },
  { name: "Projects", path: "/projects", icon: FiFolder },
  { name: "Skills", path: "/skills", icon: FiCode },
  { name: "Contact", path: "/contact", icon: FiMail },
];

export default function Navbar() {
  const [user, setUser] = useState(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const navigate = useNavigate();

  // Fetch user info on mount
  useEffect(() => {
    const fetchUser = async () => {
      try {
        const { data } = await axios.get("/api/user/me");
        setUser(data);
      } catch (err) {
        setUser(null);
      }
    };
    fetchUser();
  }, []);

  // Handle scroll behavior for mobile
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="bg-white/70 dark:bg-gray-900/70 backdrop-blur sticky top-0 z-50 shadow-md">
      {/* Upper Navbar - Mobile Only - Hidden when scrolled */}
      <div className={`md:hidden border-b border-gray-200 dark:border-gray-700 transition-all duration-300 ${
        isScrolled ? 'h-0 opacity-0 overflow-hidden' : 'h-14 opacity-100'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-14">
            {/* Logo */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ type: "spring", stiffness: 200, damping: 15 }}
            >
              <Link
                to="/"
                className="text-xl font-extrabold tracking-tight text-indigo-600 dark:text-indigo-400 flex items-center gap-2"
              >
                <span className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent animate-gradient-x">
                  Knowtica
                </span>
              </Link>
            </motion.div>

            {/* Empty div to maintain layout - Home button removed */}
            <div className="w-8"></div>
          </div>
        </div>
      </div>

      {/* Lower Navbar */}
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo - Desktop Only */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ type: "spring", stiffness: 200, damping: 15 }}
            className="hidden md:block"
          >
            <Link
              to="/"
              className="text-2xl font-extrabold tracking-tight text-indigo-600 dark:text-indigo-400 flex items-center gap-2"
            >
              <span className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent animate-gradient-x">
                Knowtica
              </span>
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <ul className="hidden md:flex space-x-6 items-center">
            {navItems.map(({ name, path, icon: Icon }, idx) => (
              <motion.li
                key={name}
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.05 * idx }}
                whileHover={{ scale: 1.1, color: "#6366f1" }}
              >
                <NavLink
                  to={path}
                  className={({ isActive }) =>
                    `relative font-semibold px-3 py-2 transition-colors duration-200 flex items-center gap-2
                    ${
                      isActive
                        ? "text-indigo-600 dark:text-indigo-400 after:absolute after:left-0 after:-bottom-1 after:w-full after:h-0.5 after:bg-indigo-500 after:rounded"
                        : "text-gray-700 hover:text-indigo-600 dark:text-gray-300 dark:hover:text-indigo-400"
                    }`
                  }
                >
                  <Icon size={18} />
                  {name}
                </NavLink>
              </motion.li>
            ))}

            {/* Profile Image Button - Removed */}
          </ul>

          {/* Mobile Navigation Items - Icon Based */}
          <div className="md:hidden flex-1">
            <ul className="flex justify-around items-center py-2">
              {/* Home button for mobile */}
              <motion.li
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    `flex flex-col items-center p-2 rounded-xl transition-all duration-200
                    ${
                      isActive
                        ? "text-indigo-600 dark:text-indigo-400 bg-indigo-50 dark:bg-indigo-900/50 transform -translate-y-1"
                        : "text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 hover:bg-gray-100 dark:hover:bg-gray-800"
                    }`
                  }
                >
                  <FiHome size={20} />
                  <span className="text-xs mt-1 font-medium">Home</span>
                </NavLink>
              </motion.li>

              {navItems.map(({ name, path, icon: Icon }) => (
                <motion.li
                  key={name}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <NavLink
                    to={path}
                    className={({ isActive }) =>
                      `flex flex-col items-center p-2 rounded-xl transition-all duration-200
                      ${
                        isActive
                          ? "text-indigo-600 dark:text-indigo-400 bg-indigo-50 dark:bg-indigo-900/50 transform -translate-y-1"
                          : "text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 hover:bg-gray-100 dark:hover:bg-gray-800"
                      }`
                    }
                  >
                    <Icon size={20} />
                    <span className="text-xs mt-1 font-medium">{name}</span>
                  </NavLink>
                </motion.li>
              ))}
            </ul>
          </div>

          {/* Profile Button - Removed for mobile */}
        </div>
      </nav>
    </header>
  );
}