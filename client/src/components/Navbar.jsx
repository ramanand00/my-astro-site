import { useEffect, useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";
import axios from "axios";

const navItems = [
  { name: "About",    path: "/about" },
  { name: "Blogs",    path: "/blogs" },
  { name: "Projects", path: "/projects" },
  { name: "Skills",   path: "/skills" },
  { name: "Contact",  path: "/contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);         // Mobile menu state
  const [user, setUser] = useState(null);          // User state
  const navigate = useNavigate();

  // Fetch user info on mount (adjust URL as needed)
  useEffect(() => {
    const fetchUser = async () => {
      try {
        const { data } = await axios.get("/api/user/me");
        setUser(data);
      } catch (err) {
        setUser(null);
        // Optional: handle error or redirect to login
      }
    };
    fetchUser();
  }, []);

  // Navigate to dashboard/profile page or login
  const handleProfileClick = () => {
    if (user) {
      navigate("/dashboard");  // or wherever user dashboard/profile is
    } else {
      navigate("/login");
    }
  };

  return (
    <header className="bg-white/70 dark:bg-gray-900/70 backdrop-blur sticky top-0 z-50 shadow-md">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">

          {/* Logo */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ type: "spring", stiffness: 200, damping: 15 }}
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
            {navItems.map(({ name, path }, idx) => (
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
                    `relative font-semibold px-2 py-1 transition-colors duration-200
                    ${
                      isActive
                        ? "text-indigo-600 dark:text-indigo-400 after:absolute after:left-0 after:-bottom-1 after:w-full after:h-0.5 after:bg-indigo-500 after:rounded"
                        : "text-gray-700 hover:text-indigo-600 dark:text-gray-300 dark:hover:text-indigo-400"
                    }`
                  }
                >
                  {name}
                </NavLink>
              </motion.li>
            ))}

            {/* Profile Image Button */}
            <motion.li
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.35 }}
              className="ml-4"
            >
              <button
                onClick={handleProfileClick}
                title="Dashboard"
                className="focus:outline-none"
              >
                 <img
  src="/logo.svg"
  alt="Ramanand Mandal"
  loading="lazy"
  className="w-10 h-10 rounded-full border-2 border-indigo-500 shadow-sm object-cover"
/>
              </button>
            </motion.li>
          </ul>

          {/* Mobile Hamburger */}
          <motion.button
            onClick={() => setOpen(!open)}
            className="md:hidden p-2 rounded focus:outline-none focus:ring-2 focus:ring-indigo-500 border border-indigo-100 dark:border-gray-800 shadow"
            aria-label="Toggle navigation"
            whileTap={{ scale: 0.85, rotate: 10 }}
            animate={{ rotate: open ? 90 : 0 }}
          >
            {open ? <FiX size={24} /> : <FiMenu size={24} />}
          </motion.button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {open && (
          <motion.ul
            className="md:hidden bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700 px-4 pb-4 space-y-2 shadow-lg rounded-b-xl"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            {navItems.map(({ name, path }, idx) => (
              <motion.li
                key={name}
                initial={{ x: -30, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: -30, opacity: 0 }}
                transition={{ delay: 0.05 * idx }}
                whileHover={{ scale: 1.05 }}
              >
                <NavLink
                  to={path}
                  onClick={() => setOpen(false)}
                  className={({ isActive }) =>
                    `block py-2 px-2 font-semibold rounded transition-colors duration-200
                    ${
                      isActive
                        ? "text-indigo-600 dark:text-indigo-400 bg-indigo-50 dark:bg-indigo-900"
                        : "text-gray-700 hover:text-indigo-600 dark:text-gray-300 dark:hover:text-indigo-400"
                    }`
                  }
                >
                  {name}
                </NavLink>
              </motion.li>
            ))}

            {/* Mobile Profile Button */}
            <motion.li
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: -20, opacity: 0 }}
              className="pt-2 border-t dark:border-gray-700"
            >
              <button
                onClick={() => {
                  setOpen(false);
                  handleProfileClick();
                }}
                className="flex items-center gap-3 py-2 px-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 rounded w-full text-left focus:outline-none"
              >
                <img
  src="/logo.svg"
  alt="Ramanand Mandal"
  loading="lazy"
  className="w-10 h-10 rounded-full border-2 border-indigo-500 shadow-sm object-cover"
/>
                <span>{user?.fullName || "Dashboard"}</span>
              </button>
            </motion.li>
          </motion.ul>
        )}
      </AnimatePresence>
    </header>
  );
}
