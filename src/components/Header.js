import React from "react";
import "./Header.css";
import { FaSearch, FaChevronDown, FaBell } from "react-icons/fa";
// Profile Image
import profileImage from "../img/Vetri.jpg";

function Header() {
  return (
    <header>
      <h2>skateboard</h2>

      <div className="inputBox">
        <input type="text" id="searchInput" placeholder="search" />
        <i className="searchIcon">
          <FaSearch />
        </i>
      </div>

      <div className="profileContainer">
        <div className="profileImageBox">
          <img src={profileImage} />
        </div>

        <div className="nameBox">
          <h3>Vetrivel Ravi</h3>
          <i className="dropIcon">
            <FaChevronDown />
          </i>
        </div>

        <i className="notificationIcon">
          <div></div>
          <FaBell />
        </i>
      </div>
    </header>
  );
}

export default Header;
