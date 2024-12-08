import React from "react";
import { useEffect, useRef, useState } from "react";
import "../styles/_main.scss";
import check from "../images/main/correct.png";
import codeIMG from "../images/main/code.png";
import briefcaseIMG from "../images/main/briefcase.png";
import linkIMG from "../images/main/link.png";
import birthdaycakeIMG from "../images/main/birthday-cake.png";
import calendarIMG from "../images/main/calendar.png";
import lisaIMG from "../images/lisa.jpg";
import lisaPinned from "../images/lisa_hero2.png";
import pushpinIMG from "../images/feed/pushpin.png";
import githubIMG from "../images/projects/github-icon-2.svg";

const Main = () => {
  // State to track the active section
  const [activeSection, setActiveSection] = useState("feed");
  const defaultSpanRef = useRef(null);

  const spans = document.querySelectorAll(".nav-links");

  useEffect(() => {
    // Set focus to the default span when the component loads
    if (defaultSpanRef.current) {
      defaultSpanRef.current.focus();
    }
  }, []);

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
          <div className="profile-info">
            <div className="profile-name-follow">
              <div className="profile-name">
                <h1>Lisa Osinowo</h1>
                <img src={check} alt="" />
              </div>
            </div>

            <p id="username">@lisaosinowo</p>

            <div className="profile-quote">
              <p>
                "The best way to predict the future is to create it." -Alan Kay
              </p>
              <img src={codeIMG} alt="" />
            </div>
            <p id="header-para-desc">
              Web Developer. Aspiring Fullstack Developer. Chemical Engineering
              (BEng) Graduate.
            </p>

            <div className="profile-details">
              <div className="prof-details-sections">
                <img src={briefcaseIMG} alt="" />
                <p>Available</p>
              </div>
              <div className="prof-details-sections">
                <img src={linkIMG} alt="" />
                <p>
                  <a href="#">Links</a>
                </p>
              </div>
              <div className="prof-details-sections">
                <img src={birthdaycakeIMG} alt="" />
                <p>January 6th</p>
              </div>
              <div className="prof-details-sections">
                <img src={calendarIMG} alt="" />
                <p>Joined August 2024</p>
              </div>
            </div>

            <div className="portfolio-sections-container">
              <div className="portfolio-sections">
                <span
                  className="nav-links"
                  ref={defaultSpanRef}
                  tabIndex={0}
                  onClick={() => setActiveSection("feed")}
                >
                  Feed
                </span>
                <span
                  className="nav-links"
                  tabIndex={0}
                  onClick={() => setActiveSection("about")}
                >
                  About
                </span>
                <span
                  className="nav-links"
                  tabIndex={0}
                  onClick={() => setActiveSection("projects")}
                >
                  Projects
                </span>
                {/* <span
                  className="nav-links"
                  tabIndex={0}
                  onClick={() => setActiveSection("contact")}
                >
                  Contact
                </span> */}
              </div>
            </div>
          </div>
        </div>
      </div>

      {activeSection === "feed" && (
        <section id="feedMaterial" className="feed-section">
          <div className="feed-section-containers">
            <div className="feed-container">
              <div className="feed-content" id="content1">
                <div className="feed-top-content">
                  <div className="profile-pic-pin">
                    <img id="pushpin-img" src={pushpinIMG} alt="" />
                    <img id="mini-profile-pic-pinned" src={lisaIMG} alt="" />
                  </div>
                  <div className="feed-content-info">
                    <p id="pinned-name">Pinned</p>
                    <div className="name-date-pinned">
                      <p className="name-date-name">Lisa</p>
                      <img className="blue-tick" src={check} alt="" />
                      <p className="username-feed">@lisaosinowo</p>
                      <p className="dot-name-date">·</p>
                      <p className="name-date-date">2 Aug 2024</p>
                    </div>
                  </div>
                </div>

                <div className="feed-desc-container">
                  <div className="feed-desc">
                    <p>
                      Welcome to my Portfolio🤗 This is a space where I post my
                      coding journey with Python, HTML, CSS + SASS, JavaScript
                      and React. Feel free to browse through this site!😋
                      #FutureFullstackDeveloper
                    </p>
                    <img className="photo-screenshot" src={lisaPinned} alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {activeSection === "about" && (
        <section id="aboutMaterial" class="about-section">
          <div className="about-main-container">
            <div className="about-container">
              <h1>Hi User! 😊</h1>
              <p className="about-info">
                I am Lisa, a Frontend Developer (and Chemical Engineering
                graduate) who strives to become a Fullstack Developer in the
                future.
              </p>

              <p className="about-info">
                My Chemical Engineering degree is where my problem solving and
                innovation skills stemmed from. After obtaining my degree I
                decided to transition into the tech world where I initially
                taught myself how to code with Python. In October 2024, I
                obtained a Frontend Development Fundamentals certificate after
                completing my Frontend Development bootcamp. Within the
                bootcamp, I learned HTML and CSS. Now I am learning JavaScript
                and React to further equip myself with the skills needed for
                Frontend Development.
              </p>

              <p className="about-info">
                In January 2025 I will be starting a 16-week CFGdegree in
                Full-stack development with a +Masters in Cyber Security with
                Code First Girls. This course includes HTML, CSS, JavaScript,
                React, TypeScript and Angular.
              </p>

              <p className="about-info">
                I am known to be a resilient and determinted character who
                doesn't shy away from complex problems/tasks. I am always up for
                a challenge which also fuels my coding confidence.
              </p>
            </div>
          </div>
        </section>
      )}

      {activeSection === "projects" && (
        <section id="projectsMaterial" class="projects-section">
          <div className="projects-main-container">
            <div className="projects-container">
              <h1>My Projects 😎</h1>
              <p className="projects-info">
                Press the GitHub cat to view my projects on Github!
              </p>
              <div className="project-btn">
                <a
                  href="https://github.com/lisaosinowo?tab=repositories"
                  target="_blank"
                >
                  <img id="github-img" src={githubIMG} alt="" />
                </a>
              </div>
            </div>
          </div>
        </section>
      )}
    </>
  );
};

export default Main;
