import axios from "axios";

const API_KEY = import.meta.env.VITE_GITHUB_API_KEY;

const api = axios.create({
  baseURL: "https://api.github.com/",
  headers: {
    Authorization: `token ${API_KEY}`,
  },
});

export const getGithubUsers = async () => {
  try {
    const response = await api.get("users");
    return response.data;
  } catch (error) {
    console.error("Error fetching GitHub users:", error);
    return [];
  }
};
