import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import UserList from "./components/UserList";
import Header from "./components/Header";

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<UserList />} /> {/* Root route */}
        <Route path="/users" element={<UserList />} />{" "}
        {/* Define the /users route */}
      </Routes>
    </Router>
  );
};

export default App;
