import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import UserList from "./components/UserList";
import Search from "./components/Search";
import "./style/index.css";

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/users" element={<UserList />} />
        <Route path="/search" element={<Search />} />
      </Routes>
    </Router>
  );
};

export default App;
