import axios from "axios";

const API_KEY = import.meta.env.VITE_GITHUB_API_KEY;

const api = axios.create({
  baseURL: "https://api.github.com/",
  headers: {
    Authorization: `token ${API_KEY}`,
    Accept: "application/vnd.github.v3+json",
  },
});

// ✅ Fetch user data by username
export const fetchUserData = async (username) => {
  try {
    const response = await api.get(`/users/${username}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching user data:", error);
    if (error.response?.status === 404) {
      return null;
    }
    throw new Error("API request failed: " + error.message);
  }
};

// ✅ Advanced search with username, location, repo count & pagination
export const fetchAdvancedUserData = async ({
  username = "",
  location = "",
  minRepos = 0,
  page = 1,
  perPage = 10,
}) => {
  try {
    let query = [];

    if (username) query.push(`user:${username}`);
    if (location) query.push(`location:${location}`);
    if (minRepos) query.push(`repos:>=${minRepos}`);

    if (query.length === 0) {
      throw new Error("At least one search criteria is required.");
    }

    const searchQuery = query.join("+");
    const response = await api.get(
      `/search/users?q=${searchQuery}&page=${page}&per_page=${perPage}`
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
