import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import Header from "./components/Header";
import UserList from "./components/UserList";
import Search from "./components/Search";

const NotFound = () => (
  <div className="text-center text-red-500 font-bold text-xl mt-10">
    <h2>404 - Page Not Found</h2>
    <p>Oops! The page you’re looking for doesn’t exist.</p>
  </div>
);

const App = () => {
  return (
    <Router>
      <Header />
      <div className="container mx-auto p-4">
        <Routes>
          <Route path="/" element={<Navigate to="/users" replace />} />
          <Route path="/users" element={<UserList />} />
          <Route path="/search" element={<Search />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
