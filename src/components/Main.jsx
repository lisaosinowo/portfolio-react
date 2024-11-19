import React from "react";
import "../styles/_main.scss";
import check from "../images/main/correct.png";
import codeIMG from "../images/main/code.png";
import briefcaseIMG from "../images/main/briefcase.png";
import linkIMG from "../images/main/link.png";
import birthdaycakeIMG from "../images/main/birthday-cake.png";
import calendarIMG from "../images/main/calendar.png";
import lisaIMG from "../images/lisa.jpg";
import lisaPinned from "../images/feed/lisa-pinned.jpg";
import pushpinIMG from "../images/feed/pushpin.png";
import screenie1 from "../images/feed/Screenshot 2024-07-23 234833.png";
import screenie2 from "../images/feed/Screenshot 2024-07-24 160131.png";
import screenie3 from "../images/feed/Screenshot 2024-07-24 161223.png";

const Main = () => {
  function showSection(section) {
    // Hide all sections
    document.getElementById("feedMaterial").hidden = true;
    document.getElementById("aboutMaterial").hidden = true;
    // document.getElementById('portfolioMaterial').hidden = true;
    // document.getElementById('contactMaterial').hidden = true;

    // Show the selected section
    if (section === "feed") {
      document.getElementById("feedMaterial").hidden = false;
    } else if (section === "about") {
      document.getElementById("aboutMaterial").hidden = false;
    }
    // else if (section === 'portfolio') {
    //     document.getElementById('portfolioMaterial').hidden = false;
    // } else if (section === 'contact') {
    //     document.getElementById('contactMaterial').hidden = false;
    // }
  }

  const spans = document.querySelectorAll(".nav-links");

  function handleSpanClick(event) {
    // Remove 'active' class from all spans
    spans.forEach((span) => span.classList.remove("active"));

    // Add 'active' class to the clicked span
    event.target.classList.add("active");
  }

  // Add click event listener to each span
  spans.forEach((span) => {
    span.addEventListener("click", handleSpanClick);
  });

  return (
    <>
      <div className="main-wrapper">
        <div className="main-container">
          <div class="profile-info">
            <div class="profile-name-follow">
              <div class="profile-name">
                <h1>Lisa Osinowo</h1>
                <img src={check} alt="" />
              </div>
            </div>

            <p id="username">@lisaosinowo</p>

            <div class="profile-quote">
              <p>
                "The best way to predict the future is to create it." -Alan Kay
              </p>
              <img src={codeIMG} alt="" />
            </div>
            <p id="header-para-desc">
              Web Developer. Aspiring Fullstack Developer. Chemical Engineering
              (BEng) Graduate.
            </p>

            <div class="profile-details">
              <div class="prof-details-sections">
                <img src={briefcaseIMG} alt="" />
                <p>Available</p>
              </div>
              <div class="prof-details-sections">
                <img src={linkIMG} alt="" />
                <p>
                  <a href="#">Links</a>
                </p>
              </div>
              <div class="prof-details-sections">
                <img src={birthdaycakeIMG} alt="" />
                <p>January 6th</p>
              </div>
              <div class="prof-details-sections">
                <img src={calendarIMG} alt="" />
                <p>Joined August 2024</p>
              </div>
            </div>

            <div class="portfolio-sections-container">
              <div class="portfolio-sections">
                <span className="nav-links" onClick={() => showSection("feed")}>
                  Feed
                </span>
                <span
                  className="nav-links"
                  onClick={() => showSection("about")}
                >
                  About
                </span>
                <span
                  className="nav-links"
                  onClick={() => showSection("portfolio")}
                >
                  Projects
                </span>
                <span
                  className="nav-links"
                  onClick={() => showSection("contact")}
                >
                  Contact
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div id="feedMaterial" className="feed-section">
        <div class="feed-section-containers">
          <div class="feed-container">
            <div class="feed-content" id="content1">
              <div class="feed-top-content">
                <div class="profile-pic-pin">
                  <img id="pushpin-img" src={pushpinIMG} alt="" />
                  <img id="mini-profile-pic-pinned" src={lisaIMG} alt="" />
                </div>
                <div class="feed-content-info">
                  <p id="pinned-name">Pinned</p>
                  <div class="name-date-pinned">
                    <p class="name-date-name">Lisa</p>
                    <img class="blue-tick" src={check} alt="" />
                    <p class="username-feed">@lisaosinowo</p>
                    <p class="dot-name-date">·</p>
                    <p class="name-date-date">2 Aug 2024</p>
                  </div>
                </div>
              </div>

              <div class="feed-desc-container">
                <div class="feed-desc">
                  <p>
                    Hi User! Welcome to my Portfolio🤗 This is a space where I
                    post my coding journey with Python, HTML, CSS, JavaScript.
                    Feel free to browse through this site!😋
                    #FutureFullstackDeveloper
                  </p>
                  <img class="photo-screenshot" src={lisaPinned} alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Main;
