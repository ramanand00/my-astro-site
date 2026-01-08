import React, { useEffect, useState } from "react";
import axios from "axios";

const RecentActivity = () => {
  const [activities, setActivities] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get("http://localhost:5000/api/activities")
      .then(res => {
        setActivities(res.data);
        setLoading(false);
      })
      .catch(err => {
        console.error("Failed to load activities:", err);
        setLoading(false);
      });
  }, []);

  return (
    <div className="bg-white rounded shadow p-4">
      <h3 className="text-lg font-semibold mb-4">Recent Activity</h3>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <ul className="space-y-2">
          {activities.map((act, index) => (
            <li key={index} className="text-gray-700 border-b pb-2">
              {act.description}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default RecentActivity;
