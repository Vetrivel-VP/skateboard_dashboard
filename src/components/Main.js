import React, { useState } from "react";
import "./Main.css";
import {
  FaHome,
  FaArrowRight,
  FaBroadcastTower,
  FaClipboardList,
  FaBookmark,
  FaBookOpen,
  FaSignOutAlt,
} from "react-icons/fa";
import MenuList from "./MenuList";
import MainCard from "./MainCard";
// IMages
import Vetri from "../img/Vetri.jpg";
import man1 from "../img/man1.jpg";
import man2 from "../img/man2.jpg";
import man3 from "../img/man3.jpg";
// Videos
import Video1 from "../video/1.mp4";
import Video2 from "../video/2.mp4";
import Video3 from "../video/3.mp4";
import Video4 from "../video/4.mp4";
import SkatersProfile from "./SkatersProfile";
import SearchResultContainer from "./SearchResultContainer";

function Main() {
  return (
    <main>
      <div className="leftSection">
        <div className="menuSection">
          <h3>Menu</h3>
          <MenuList listIcon={<FaHome />} listName={"Discover"} />
          <MenuList listIcon={<FaArrowRight />} listName={"Trending"} />
          <MenuList listIcon={<FaBroadcastTower />} listName={"Streaming"} />
          <MenuList listIcon={<FaClipboardList />} listName={"Playlist"} />
          <MenuList listIcon={<FaBookmark />} listName={"Bookmark"} />
        </div>

        <div className="line"></div>

        <div className="categorySection">
          <h3>Category</h3>
          <MenuList listIcon={<FaBroadcastTower />} listName={"Live Stream"} />
          <MenuList listIcon={<FaBookOpen />} listName={"Tutorial"} />
          <MenuList listIcon={<FaBroadcastTower />} listName={"Competition"} />
          <MenuList listIcon={<FaClipboardList />} listName={"Community"} />
        </div>

        <div className="line"></div>

        <a className="signOut">
          <FaSignOutAlt />
          <p>Sign Out</p>
        </a>
      </div>

      <div className="rightSection">
        <div className="leftContainer">
          <h1>Trending</h1>
          <MainCard
            id={"01"}
            video={Video1}
            title={"Basic How to ride you skateboard comfortly"}
            views={"125,675"}
            likes={"125,675"}
            author_image={Vetri}
            name="Vetrivel Ravi"
            posted_date="2 days ago"
            video_duration="2 min"
          />

          <MainCard
            id={"02"}
            video={Video2}
            title={"How to do basic jump safely"}
            views={"125,675"}
            likes={"125,675"}
            author_image={Vetri}
            name="Vetrivel Ravi"
            posted_date="2 days ago"
            video_duration="2 min"
          />

          <MainCard
            id={"03"}
            video={Video3}
            title={"Tips to playing skatesboard on the ramp"}
            views={"125,675"}
            likes={"125,675"}
            author_image={Vetri}
            name="Vetrivel Ravi"
            posted_date="2 days ago"
            video_duration="2 min"
          />

          <MainCard
            id={"04"}
            video={Video4}
            title={"Preapre for your first skateboard jump"}
            views={"125,675"}
            likes={"125,675"}
            author_image={Vetri}
            name="Vetrivel Ravi"
            posted_date="2 days ago"
            video_duration="2 min"
          />
        </div>
        <div className="rightContainer">
          <div className="topContainer">
            <h2>Popular Skaters</h2>
            <div className="skaters">
              <SkatersProfile img={Vetri} name={"Vetrivel Ravi"} />
              <SkatersProfile img={man1} name={"John Smith"} />
              <SkatersProfile img={man2} name={"Willioms David"} />
              <SkatersProfile img={man3} name={"Mark Collins"} />
              <SkatersProfile img={Vetri} name={"Akash Kumar"} />
              <SkatersProfile img={man3} name={"Munees"} />
            </div>
          </div>

          <div className="lowerContaier">
            <h2>Popular Searches</h2>

            <div className="searchResult">
              <SearchResultContainer
                content="skateboard trick"
                content_value="21,938,421"
              />
              <SearchResultContainer
                content="flip and jump"
                content_value="21,938,421"
              />
              <SearchResultContainer
                content="safety equipment"
                content_value="21,938,421"
              />

              <SearchResultContainer
                content="recent events"
                content_value="21,938,421"
              />
            </div>

            <a href="#"> See All Popular Searches </a>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Main;
