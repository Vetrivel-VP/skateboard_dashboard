import React from "react";
import "./SkatersProfile.css";
import { FaCheck } from "react-icons/fa";

function SkatersProfile({ img, name }) {
  return (
    <div className="skaterProfileContainer">
      <div className="skaterProfile_imageBox">
        <img src={img} alt="" />
        <div className="circleIcon">
          <FaCheck />
        </div>
      </div>
      <h2 className="skater_name">{name}</h2>
    </div>
  );
}

export default SkatersProfile;
