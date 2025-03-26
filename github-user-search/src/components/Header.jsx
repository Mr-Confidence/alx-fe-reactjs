import React from "react";
import { Link } from "react-router-dom";
import "../style/index.css";

const Header = () => {
  return (
    <header>
      <nav>
        <Link to="/users">Users</Link>
        <Link to="/search">Search</Link> {/* New link for search */}
      </nav>
    </header>
  );
};

export default Header;
