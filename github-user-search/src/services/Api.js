import axios from "axios";

// API service to fetch a list of GitHub users
export const getGithubUsers = async () => {
  try {
    const response = await axios.get("https://api.github.com/users");
    return response.data;
  } catch (error) {
    console.error("Error fetching GitHub users:", error);
    throw new Error("Unable to fetch users.");
  }
};

// GitHub API endpoint for user search (for the Search component)
export const fetchUserData = async (username) => {
  try {
    const response = await axios.get(
      `https://api.github.com/users/${username}`
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching user data:", error);
    throw new Error("User not found.");
  }
};
