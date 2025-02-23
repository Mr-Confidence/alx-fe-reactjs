function UserProfile() {
  const { user } = useContext(UserContext); // Use the context to get the user data

  return (
    <div style={{ padding: "20px" }}>
      <h1>User Profile</h1>
      <p>Name: {user.name}</p>
      <p>Email: {user.email}</p>
    </div>
  );
}

export default UserProfile;
