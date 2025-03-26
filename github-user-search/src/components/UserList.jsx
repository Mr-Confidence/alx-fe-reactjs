import React, { useState, useEffect } from "react";
import { getGithubUsers } from "../services/githubService";
import "../style/index.css";

const UserList = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const data = await getGithubUsers();
        setUsers(data);
      } catch (err) {
        setError("Error fetching GitHub users.");
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  if (loading) return <p>Loading users...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div>
      <h1>GitHub Users</h1>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            <img src={user.avatar_url} alt={user.login} width="50" />
            <p>{user.login}</p>
            <a href={user.html_url} target="_blank" rel="noopener noreferrer">
              Visit Profile
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserList;
