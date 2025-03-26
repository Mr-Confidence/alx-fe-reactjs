import React, { useState } from "react";
import { fetchUserData } from "../services/githubService";

const Search = () => {
  const [username, setUsername] = useState("");
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSearch = async () => {
    if (!username.trim()) {
      setError("Please enter a GitHub username.");
      return;
    }

    setLoading(true);
    setError(null);
    setUser(null);

    try {
      const data = await fetchUserData(username);
      if (data) {
        setUser(data);
      } else {
        setError("User not found.");
      }
    } catch (err) {
      console.error("Error fetching user:", err);
      setError("Failed to fetch user data.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">
        GitHub User Search
      </h1>

      <div className="flex justify-center gap-4 mb-6">
        <input
          type="text"
          placeholder="Enter GitHub username..."
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="p-2 border border-gray-300 rounded-md w-80"
        />
        <button
          onClick={handleSearch}
          className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition"
        >
          Search
        </button>
      </div>

      {loading && <p className="text-center text-gray-500">Loading...</p>}

      {error && <p className="text-center text-red-500">{error}</p>}

      {user && (
        <div className="max-w-md mx-auto bg-white shadow-md rounded-lg p-6 mt-6 text-center">
          <img
            src={user.avatar_url}
            alt={user.login}
            className="w-24 h-24 rounded-full mx-auto border-4 border-blue-500"
          />
          <h2 className="text-xl font-semibold mt-4">{user.login}</h2>
          <p className="text-gray-600">
            {user.location || "No location provided"}
          </p>
          <p className="text-gray-700">
            Public Repos:{" "}
            <span className="font-semibold text-blue-600">
              {user.public_repos}
            </span>
          </p>
          <a
            href={user.html_url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-blue-500 text-white px-4 py-2 rounded-full mt-4 hover:bg-blue-600 transition"
          >
            View Profile
          </a>
        </div>
      )}
    </div>
  );
};

export default Search;
