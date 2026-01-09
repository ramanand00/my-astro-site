import { useEffect, useState } from "react";
import axios from "axios";

const Topbar = () => {
  const [user, setUser] = useState(null);

  // Fetch logged-in user data (example using token in localStorage)
  useEffect(() => {
    const fetchUser = async () => {
      try {
        const token = localStorage.getItem("token"); // JWT or your auth token
        const res = await axios.get("https://my-astro-site-9n6h.vercel.app/api/user/me", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setUser(res.data);
      } catch (err) {
        console.error("Failed to load user", err);
      }
    };

    fetchUser();
  }, []);

  return (
    <div className="flex items-center justify-between p-4 bg-white dark:bg-gray-800 shadow-md sticky top-0 z-50">
      {/* Search bar */}
      <input
        type="text"
        placeholder="Search anything..."
        className="px-4 py-2 rounded-lg border dark:border-gray-700 bg-gray-100 dark:bg-gray-900 text-gray-700 dark:text-white w-full max-w-md focus:outline-none focus:ring focus:ring-indigo-300"
      />

      {/* Icons and Profile */}
      <div className="flex items-center gap-4">
        <button
          className="text-gray-600 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition"
          title="Notifications"
        >
          🔔
        </button>

        {/* User Profile with Dropdown */}
        <div className="relative group cursor-pointer">
          <img
            src={user?.profileImage || "/default-user.png"}
            alt="User"
            loading="lazy"
            className="w-10 h-10 rounded-full border-2 border-indigo-600 object-cover"
          />
          <div className="absolute right-0 mt-2 w-48 bg-white dark:bg-gray-700 rounded-lg shadow-lg hidden group-hover:block z-10">
            <div className="p-4 border-b border-gray-200 dark:border-gray-600 text-center">
              <p className="text-sm font-medium text-gray-800 dark:text-gray-200">
                {user?.fullName || "Guest User"}
              </p>
              <p className="text-xs text-gray-500 dark:text-gray-400">{user?.email}</p>
            </div>
            <ul className="text-sm text-gray-600 dark:text-gray-300">
              <li className="hover:bg-gray-100 dark:hover:bg-gray-600 px-4 py-2 cursor-pointer">
                Settings
              </li>
              <li className="hover:bg-gray-100 dark:hover:bg-gray-600 px-4 py-2 cursor-pointer">
                Logout
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Topbar;
