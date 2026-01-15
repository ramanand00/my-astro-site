import React, { useEffect, useState } from "react";
import axios from "axios";

export default function PersonalDetails() {
  const [user, setUser] = useState(null);
  const [editing, setEditing] = useState(false);
  const [profileImage, setProfileImage] = useState(null);

  const fetchUser = async () => {
    try {
      const token = localStorage.getItem("token"); // assume JWT saved on login
      const res = await axios.get("https://ramanand-portfolio-backend.vercel.app/api/user/me", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setUser(res.data);
    } catch (error) {
      console.error("Failed to fetch user", error);
    }
  };

  useEffect(() => {
    fetchUser();
  }, []);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) setProfileImage(URL.createObjectURL(file));
  };

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSave = () => {
    // TODO: POST updated user info to backend
    alert("Saved successfully!");
    setEditing(false);
  };

  if (!user) return <p className="text-gray-400">Loading...</p>;

  return (
    <div className="max-w-2xl mx-auto bg-[#242526] p-6 rounded-xl shadow-md">
      <h2 className="text-2xl font-bold mb-6">Personal Details</h2>

      {/* Profile Image */}
      <div className="flex items-center mb-6">
        <img
          src={profileImage || user.profileImage || "https://via.placeholder.com/100"}
          alt="Profile"
          loading="lazy"
          className="w-24 h-24 rounded-full object-cover mr-4 border border-gray-600"
        />
        <input type="file" accept="image/*" onChange={handleImageChange} />
      </div>

      {/* Fields */}
      <div className="space-y-4">
        <div>
          <label className="block mb-1">Full Name</label>
          <input
            type="text"
            name="name"
            className="w-full p-2 rounded bg-[#3A3B3C] text-white"
            value={user.name}
            onChange={handleChange}
            disabled={!editing}
          />
        </div>
        <div>
          <label className="block mb-1">Email</label>
          <input
            type="email"
            name="email"
            className="w-full p-2 rounded bg-[#3A3B3C] text-white"
            value={user.email}
            onChange={handleChange}
            disabled={!editing}
          />
        </div>
        <div>
          <label className="block mb-1">Phone</label>
          <input
            type="text"
            name="phone"
            className="w-full p-2 rounded bg-[#3A3B3C] text-white"
            value={user.phone}
            onChange={handleChange}
            disabled={!editing}
          />
        </div>
      </div>

      <div className="mt-6 flex gap-4">
        {editing ? (
          <>
            <button onClick={handleSave} className="bg-blue-600 px-4 py-2 rounded">
              Save
            </button>
            <button onClick={() => setEditing(false)} className="bg-gray-600 px-4 py-2 rounded">
              Cancel
            </button>
          </>
        ) : (
          <button onClick={() => setEditing(true)} className="bg-green-600 px-4 py-2 rounded">
            Edit Details
          </button>
        )}
      </div>
    </div>
  );
}
