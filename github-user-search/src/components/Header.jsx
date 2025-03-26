import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <nav>
        <Link to="/users">Users</Link>
        {/* Add more links as needed */}
      </nav>
    </header>
  );
};

export default Header;
