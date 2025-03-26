import React, { useState } from "react";
import { searchUsers, fetchUserDetails } from "../services/githubService"; // ✅ Import both functions

const Search = () => {
  const [query, setQuery] = useState("");
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSearch = async () => {
    if (!query.trim()) {
      setError("Please enter a search term.");
      return;
    }

    setLoading(true);
    setError(null);
    setUsers([]);

    try {
      const data = await searchUsers(query);
      if (data.items) {
        // Fetch additional details (location) for each user
        const usersWithDetails = await Promise.all(
          data.items.map(async (user) => {
            const details = await fetchUserDetails(user.login);
            return { ...user, location: details.location };
          })
        );

        setUsers(usersWithDetails);
      } else {
        setError("No users found.");
      }
    } catch (err) {
      console.error("Error fetching users:", err);
      setError("Failed to fetch users.");
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
          placeholder="Search for GitHub users..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
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

      {users.length > 0 && (
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

export default Search;
