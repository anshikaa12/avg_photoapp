import React from "react";
import { Link } from "react-router-dom";
function Navbar({ ham, setHam }) {
  return (
    <div className={ham ? "nav-click" : "nav"}>
      <ul className="nav-list">
        <Link to="/" className="li-link">
          <li className="nav-item" onClick={() => setHam(!ham)}>
            Home
          </li>
        </Link>
        <li className="nav-item">Explore</li>
        <li className="nav-item">Account</li>
        <li className="nav-item">Settings</li>
        <li className="nav-item">Likes</li>
      </ul>
    </div>
  );
}

export default Navbar;
