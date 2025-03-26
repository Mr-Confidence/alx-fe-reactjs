import axios from "axios";

const API_KEY = import.meta.env.VITE_GITHUB_API_KEY;

const api = axios.create({
  baseURL: "https://api.github.com/",
  headers: {
    Authorization: `token ${API_KEY}`,
    Accept: "application/vnd.github.v3+json",
  },
});

export const fetchUserData = async (username) => {
  try {
    const response = await api.get(`/users/${username}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching user data:", error);

    if (error.response && error.response.status === 404) {
      return null;
    }

    throw new Error("API request failed: " + error.message);
  }
};

export const fetchAdvancedUserData = async (
  username,
  location,
  minRepos,
  page = 1,
  perPage = 10
) => {
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

    return response.data.items || [];
  } catch (error) {
    console.error("Error fetching advanced user data:", error);
    return [];
  }
};
