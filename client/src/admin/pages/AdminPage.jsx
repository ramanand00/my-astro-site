import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom"; // ✅ Import this
import axios from "axios";

export default function AdminContactPage() {
  const navigate = useNavigate(); // ✅ Use it here

  const [contacts, setContacts] = useState([]);
  const [filteredContacts, setFilteredContacts] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const fetchContacts = async () => {
    try {
      const res = await axios.get("http://localhost:5000/api/contact");
      setContacts(res.data);
      setFilteredContacts(res.data);
    } catch (err) {
      setError("Failed to load contact submissions.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchContacts();
  }, []);

  useEffect(() => {
    const filtered = contacts.filter((c) =>
      c.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      c.email.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setFilteredContacts(filtered);
  }, [searchQuery, contacts]);

  const handleDelete = async (id) => {
  if (!id || id.length !== 24) {
    console.error("Invalid contact ID:", id);
    alert("Invalid contact ID.");
    return;
  }

  const confirmDelete = window.confirm("Are you sure you want to delete this submission?");
  if (!confirmDelete) return;

  try {
    const response = await axios.delete(`http://localhost:5000/api/contact/${id}`);
    console.log("Delete success:", response.data);

    setContacts((prev) => prev.filter((c) => c._id !== id));
    setFilteredContacts((prev) => prev.filter((c) => c._id !== id));
  } catch (err) {
    console.error("Delete error:", err?.response?.data || err.message);
    alert("Failed to delete. Contact may not exist or server error.");
  }
};


  const exportToCSV = () => {
    const csv = [
      ["Name", "Email", "Message", "Date"],
      ...filteredContacts.map((c) => [
        `"${c.name}"`,
        `"${c.email}"`,
        `"${c.message}"`,
        new Date(c.createdAt).toLocaleString(),
      ]),
    ]
      .map((row) => row.join(","))
      .join("\n");

    const blob = new Blob([csv], { type: "text/csv" });
    const a = document.createElement("a");
    a.href = URL.createObjectURL(blob);
    a.download = "contacts.csv";
    a.click();
  };

  return (
    <section className="min-h-screen px-6 py-12 bg-gray-100 dark:bg-gray-900">
      <div className="max-w-6xl mx-auto">
        {/* ✅ Back Button Fixed */}
        <div className="flex justify-between items-center mb-6">
          <button
            onClick={() => {
              if (window.history.length > 1) {
                navigate(-1);
              } else {
                navigate("/");
              }
            }}
            className="flex items-center gap-2 text-gray-600 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
            </svg>
            Back
          </button>
          <h1 className="text-3xl font-bold text-center text-indigo-600 dark:text-indigo-400">
            Contact Submissions ({filteredContacts.length})
          </h1>
          <div className="w-24"></div> {/* Spacer for alignment */}
        </div>

        {/* Search & Actions */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
          <input
            type="text"
            placeholder="Search by name or email..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full md:w-1/3 px-4 py-2 rounded border dark:border-gray-600 dark:bg-gray-800 dark:text-white"
          />

          <div className="flex flex-wrap gap-3">
            <button
              onClick={fetchContacts}
              className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded transition"
            >
              Refresh
            </button>
            <button
              onClick={exportToCSV}
              className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded transition"
            >
              Export CSV
            </button>
          </div>
        </div>

        {/* Data Table */}
        {loading ? (
          <p className="text-center text-gray-600 dark:text-gray-300">Loading...</p>
        ) : error ? (
          <p className="text-center text-red-500">{error}</p>
        ) : filteredContacts.length === 0 ? (
          <p className="text-center text-gray-500">No submissions found.</p>
        ) : (
          <div className="overflow-x-auto bg-white dark:bg-gray-800 shadow-md rounded-lg">
            <table className="min-w-full table-auto border-collapse text-sm md:text-base">
              <thead>
                <tr className="bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-100">
                  <th className="px-4 py-2 border">Name</th>
                  <th className="px-4 py-2 border">Email</th>
                  <th className="px-4 py-2 border">Message</th>
                  <th className="px-4 py-2 border">Date</th>
                  <th className="px-4 py-2 border">Action</th>
                </tr>
              </thead>
              <tbody>
                {filteredContacts.map((c) => (
                  <tr
                    key={c._id}
                    className="hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-200"
                  >
                    <td className="px-4 py-2 border">{c.name}</td>
                    <td className="px-4 py-2 border">{c.email}</td>
                    <td className="px-4 py-2 border max-w-[300px] break-words">{c.message}</td>
                    <td className="px-4 py-2 border">
                      {new Date(c.createdAt).toLocaleString()}
                    </td>
                    <td className="px-4 py-2 border text-center">
                      <button
                        onClick={() => handleDelete(c._id)}
                        className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded text-sm"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </section>
  );
}
