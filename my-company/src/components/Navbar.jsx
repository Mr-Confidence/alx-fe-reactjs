import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div>
      <nav
        style={{
          backgroundColor: "lightblue",
          padding: "10px",
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <ul>
          <li>
            <Link style={{ color: "red" }} to="/">
              Home
            </Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/services">Services</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
