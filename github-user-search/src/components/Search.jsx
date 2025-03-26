import React, { useState } from "react";
import { fetchUserData } from "../services/githubService";
import "../style/index.css";

const Search = () => {
  const [username, setUsername] = useState("");
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSearch = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setUserData(null);

    try {
      const user = await fetchUserData(username);

      if (!user) {
        setError("Looks like we can't find the user.");
      } else {
        setUserData(user);
      }
    } catch (err) {
      setError("Something went wrong, please try again.");
      console.error("Error during fetch:", err);
      setLoading(false);
    }
  };

  return (
    <div className="search-container">
      <h2>Search GitHub User</h2>
      <form onSubmit={handleSearch}>
        <input
          type="text"
          placeholder="Enter GitHub Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <button type="submit" disabled={loading}>
          {loading ? "Loading..." : "Search"}
        </button>
      </form>
      {error && <p className="error-message">{error}</p>}
      {userData && (
        <div className="user-info">
          <img src={userData.avatar_url} alt={userData.login} width={100} />
          <h3>{userData.name}</h3>
          <p>{userData.bio}</p>
          <a href={userData.html_url} target="_blank" rel="noopener noreferrer">
            Visit GitHub Profile
          </a>
        </div>
      )}
    </div>
  );
};

export default Search;
