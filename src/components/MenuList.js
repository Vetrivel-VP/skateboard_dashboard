import React, { useState } from "react";
import "./MenuList.css";

function MenuList({ listIcon, listName }) {
  const [isActive, setActive] = useState(false);

  const toggleClass = () => {
    const allList = document.querySelectorAll(".menuList");
    allList.forEach((element) => {
      element.classList.remove("active");
    });
    setActive(!isActive);
  };

  return (
    <a href="#" onClick={toggleClass}>
      <div className={isActive ? "menuList active" : "menuList"}>
        <div className="icons">
          <i>{listIcon}</i>
        </div>

        <h3>{listName}</h3>
      </div>
    </a>
  );
}

export default MenuList;
