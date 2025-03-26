import axios from "axios";

const API_KEY = import.meta.env.VITE_GITHUB_API_KEY;
const SEARCH_USERS_URL = "https://api.github.com/search/users?q=";

const api = axios.create({
  headers: {
    Authorization: `token ${API_KEY}`,
    Accept: "application/vnd.github.v3+json",
  },
});

export const fetchUserData = async (username) => {
  try {
    const response = await api.get(`https://api.github.com/users/${username}`); // ✅ Correct URL
    return response.data;
  } catch (error) {
    console.error("Error fetching user data:", error);
    return error.response?.status === 404 ? null : Promise.reject(error);
  }
};

export const fetchUserDetails = async (username) => {
  try {
    const response = await api.get(`/users/${username}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching user details:", error);
    return null;
  }
};

export const searchUsers = async (query) => {
  try {
    const response = await api.get(`${SEARCH_USERS_URL}${query}`);
    return response.data;
  } catch (error) {
    console.error("Error searching users:", error);
    return { items: [] };
  }
};

export const fetchAdvancedUserData = async ({
  username = "",
  location = "",
  minRepos = 0,
  page = 1,
  perPage = 10,
}) => {
  try {
    let queryParts = [];

    if (username) queryParts.push(username);
    if (location) queryParts.push(`location:${location}`);
    if (minRepos) queryParts.push(`repos:>=${minRepos}`);

    if (queryParts.length === 0) {
      throw new Error("At least one search criterion is required.");
    }

    const searchQuery = queryParts.join("+");
    const response = await api.get(
      `${SEARCH_USERS_URL}${searchQuery}&page=${page}&per_page=${perPage}`
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
