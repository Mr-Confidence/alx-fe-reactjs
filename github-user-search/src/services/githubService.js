import axios from "axios";

const API_KEY = import.meta.env.VITE_GITHUB_API_KEY;
const SEARCH_USERS_URL = "https://api.github.com/search/users?q"; // ✅ Exact URL

const api = axios.create({
  headers: {
    Authorization: `token ${API_KEY}`,
    Accept: "application/vnd.github.v3+json",
  },
});

// ✅ Fetch user data by username
export const fetchUserData = async (username) => {
  try {
    const response = await axios.get(
      `https://api.github.com/users/${username}`,
      {
        headers: {
          Authorization: `token ${API_KEY}`,
          Accept: "application/vnd.github.v3+json",
        },
      }
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching user data:", error);
    if (error.response?.status === 404) {
      return null;
    }
    throw new Error("API request failed: " + error.message);
  }
};

// ✅ Advanced search using the exact URL
export const fetchAdvancedUserData = async ({
  username = "",
  location = "",
  minRepos = 0,
  page = 1,
  perPage = 10,
}) => {
  try {
    let queryParts = [];

    if (username) queryParts.push(`user:${username}`);
    if (location) queryParts.push(`location:${location}`);
    if (minRepos) queryParts.push(`repos:>=${minRepos}`);

    if (queryParts.length === 0) {
      throw new Error("At least one search criteria is required.");
    }

    const searchQuery = queryParts.join("+");
    const response = await axios.get(
      `${SEARCH_USERS_URL}${searchQuery}&page=${page}&per_page=${perPage}`, // ✅ Using the exact URL
      {
        headers: {
          Authorization: `token ${API_KEY}`,
          Accept: "application/vnd.github.v3+json",
        },
      }
    );

    return response.data.items.map((user) => ({
      id: user.id,
      login: user.login,
      avatar_url: user.avatar_url,
      html_url: user.html_url,
    }));
  } catch (error) {
    console.error("Error fetching advanced user data:", error);
    return [];
  }
};
