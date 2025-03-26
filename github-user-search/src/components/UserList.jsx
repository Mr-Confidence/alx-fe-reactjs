import React, { useState, useEffect } from "react";
import { fetchUserData } from "../services/githubService";

const UserList = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const username = "octocat";
        if (username) {
          const data = await fetchUserData(username);
          setUsers([data]);
        } else {
          setError("Username is required!");
        }
      } catch (err) {
        console.error("GitHub API Error:", err);
        setError("Error fetching GitHub users.");
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-4xl font-bold text-center text-gray-800 mb-8">
        GitHub Users
      </h1>

      {loading ? (
        <div className="text-center">
          <p className="text-gray-500 animate-pulse text-lg">
            Loading users...
          </p>
        </div>
      ) : error ? (
        <p className="text-center text-red-500 font-semibold">{error}</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {users.map((user) => (
            <div
              key={user.id}
              className="bg-white shadow-md rounded-lg p-6 transition transform hover:scale-105 hover:shadow-xl"
            >
              <img
                src={user.avatar_url}
                alt={user.login}
                className="w-24 h-24 rounded-full mx-auto border-4 border-blue-500"
              />
              <h2 className="text-xl font-semibold text-center mt-4">
                {user.login}
              </h2>
              <p className="text-sm text-gray-600 text-center">
                {user.location || "No location provided"}
              </p>
              <p className="text-center text-gray-700">
                Public Repos:{" "}
                <span className="font-semibold text-blue-600">
                  {user.public_repos}
                </span>
              </p>
              <div className="mt-4 flex justify-center">
                <a
                  href={user.html_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-blue-500 text-white px-4 py-2 rounded-full hover:bg-blue-600 transition"
                >
                  View Profile
                </a>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default UserList;
