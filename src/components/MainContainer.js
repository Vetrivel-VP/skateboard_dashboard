import React from "react";
import "./MainContainer.css";
import bgImage from "../img/bg.png";
import Header from "./Header";
import Main from "./Main";

function MainContainer() {
  return (
    <div className="MainContainer">
      <img src={bgImage} alt="" />

      <Header />

      <Main />
    </div>
  );
}

export default MainContainer;
