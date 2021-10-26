import React, { useState } from "react";
import "./MainCard.css";

import { FaRegEye, FaHeart, FaCheck } from "react-icons/fa";

function MainCard({
  id,
  video,
  title,
  views,
  likes,
  author_image,
  name,
  posted_date,
  video_duration,
}) {
  const [isFavourite, setFavourite] = useState(false);

  const toggleFavourite = () => {
    setFavourite(!isFavourite);
  };

  return (
    <div className="card">
      <h2 className="cardNumber">{id}</h2>
      <div
        className={isFavourite ? "favouriteIcon active" : "favouriteIcon"}
        onClick={toggleFavourite}
      >
        <FaHeart />
      </div>
      <div className="videoBox">
        <video autoplay="" loop muted>
          <source src={video} type="video/mp4" />
        </video>
        <p>{video_duration}</p>
      </div>
      <div className="contentBox">
        <h2>{title}</h2>
        <div className="statusIcons">
          <div className="icons">
            <FaRegEye /> <p>{views} views</p>
          </div>

          <div className="icons">
            <FaHeart /> <p>{likes} likes</p>
          </div>
        </div>

        <div className="cardProfile">
          <div className="cardImageBox">
            <img src={author_image} alt="" />
            <div className="circleIcon">
              <FaCheck />
            </div>
          </div>
          <div className="detailsBox">
            <h3>
              {name} <div></div>
            </h3>
            <p>{posted_date}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MainCard;
