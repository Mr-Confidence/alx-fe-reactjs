import axios from "axios";

const API_KEY = import.meta.env.VITE_GITHUB_API_KEY;

const api = axios.create({
  baseURL: "https://api.github.com/",
  headers: {
    Authorization: `token ${API_KEY}`,
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
