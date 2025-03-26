import React, { useState, useEffect } from "react";
import { getGithubUsers } from "../services/Api";

const UserList = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    // Fetch users from the GitHub API
    const fetchUsers = async () => {
      const data = await getGithubUsers();
      setUsers(data);
    };

    fetchUsers();
  }, []);

  return (
    <div>
      <h1>GitHub Users</h1>
      <ul>
        {users.map((user) => (
          <li key={user.id}>{user.login}</li>
        ))}
      </ul>
    </div>
  );
};

export default UserList;
