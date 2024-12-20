import React from "react";
import Lisa from "../images/lisa.jpg";
import "../styles/_header.scss";

const Header = () => {
  return (
    <>
      <div className="header-wrapper">
        <div className="header-container">
          <div className="hero">
            <img
              id="thumbnail"
              src="https://compote.slate.com/images/306254c7-594a-4db5-8f18-48ba6020a771.gif"
              alt=""
            />
            <img id="profile-pic" src={Lisa} alt="" />
            {/* <button className="follow-btn">Follow Me</button> */}
          </div>
          <a
            href="https://www.linkedin.com/in/lisa-osinowo-3bb18b236/"
            target="_blank"
          >
            <button className="follow-btn">Follow</button>
          </a>
        </div>
      </div>
    </>
  );
};

export default Header;
