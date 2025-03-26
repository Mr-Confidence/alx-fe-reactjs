import React, { useState } from "react";
import { fetchAdvancedUserData } from "../services/githubService";

const Search = () => {
  const [username, setUsername] = useState("");
  const [location, setLocation] = useState("");
  const [minRepos, setMinRepos] = useState("");
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSearch = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setUsers([]);

    try {
      const results = await fetchAdvancedUserData(username, location, minRepos);

      if (!results || results.length === 0) {
        setError("No users found matching your criteria.");
      } else {
        setUsers(results);
      }
    } catch (err) {
      setError("Something went wrong. Please try again.");
      console.error("Error fetching data:", err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-2xl mx-auto mt-10 p-6 bg-white shadow-lg rounded-lg">
      <h2 className="text-3xl font-semibold text-gray-800 text-center mb-6">
        🔍 Search GitHub Users
      </h2>

      {/* Search Form */}
      <form onSubmit={handleSearch} className="space-y-4">
        <input
          type="text"
          placeholder="GitHub Username (optional)"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none"
        />
        <input
          type="text"
          placeholder="Location (e.g., New York)"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none"
        />
        <input
          type="number"
          placeholder="Min Repositories"
          value={minRepos}
          onChange={(e) => setMinRepos(e.target.value)}
          className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none"
        />
        <button
          type="submit"
          disabled={loading}
          className="w-full bg-blue-600 text-white p-3 rounded-lg hover:bg-blue-700 transition disabled:opacity-50"
        >
          {loading ? "🔄 Searching..." : "🔍 Search"}
        </button>
      </form>

      {/* Error Message */}
      {error && (
        <p className="mt-4 text-red-500 font-semibold text-center">{error}</p>
      )}

      {/* Search Results */}
      {users.length > 0 && (
        <div className="mt-6">
          <h3 className="text-xl font-semibold text-gray-800">
            📌 Search Results:
          </h3>
          <ul className="mt-4 space-y-4">
            {users.map((user) => (
              <li
                key={user.id}
                className="p-4 bg-gray-100 rounded-lg shadow-md flex items-center gap-4"
              >
                <img
                  src={user.avatar_url}
                  alt={user.login}
                  className="w-14 h-14 rounded-full border-2 border-blue-500"
                />
                <div>
                  <p className="font-bold text-gray-800 text-lg">
                    {user.login}
                  </p>
                  <p className="text-sm text-gray-600">
                    📍 {user.location || "No location provided"}
                  </p>
                  <p className="text-sm text-gray-600">
                    📦 Repos: {user.public_repos}
                  </p>
                  <a
                    href={user.html_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500 hover:underline font-medium"
                  >
                    🔗 View Profile
                  </a>
                </div>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Search;
