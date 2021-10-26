import React from "react";
import "./SearchResultContainer.css";

function SearchResultContainer({ content, content_value }) {
  return (
    <div className="searchResult_container">
      <div className="searchContent_box">
        <h2>{content}</h2>
        <p>{content_value}</p>
      </div>
      <div className="searchLine_box"></div>
    </div>
  );
}

export default SearchResultContainer;
