import "./Nav.css";
import React, { useState } from "react";
import { BsFilePerson } from "react-icons/bs";
import { CgFileDocument } from "react-icons/cg";
import { AiOutlineFundProjectionScreen } from "react-icons/ai";
import { GiVibratingSmartphone } from "react-icons/gi";

const Nav = () => {
  const [hamburgerMenu, setHamburgerMenu] = useState(false);

  const hamburgerMenuButton = () => {
    setHamburgerMenu(!hamburgerMenu);
  };

  return (
    <>
      <nav>
        <div className="containsNameLinksAndHamMenuBtn">
          <div className="navName">Cassie Hernandez</div>
          <ul className="allNavLinks">
            <li className="navItems">
              <a
                className="homeBtn"
                id="changeColorWhenClicked1"
                href="#homeButton"
              >
                Home
              </a>
            </li>
            <li className="navItems">
              <a
                className="aboutMeBtn"
                id="changeColorWhenClicked2"
                href="#aboutMe"
              >
                About Me
              </a>
            </li>
            <li className="navItems">
              <a
                className="resumeBtn"
                href={process.env.PUBLIC_URL + "/Resume.pdf"}
                target="_blank"
                rel="noreferrer"
              >
                Resume
              </a>
            </li>
            <li className="navItems">
              <a
                className="projectsBtn"
                id="changeColorWhenClicked3"
                href="#projects"
              >
                Projects
              </a>
            </li>
            <li className="navItems">
              <a
                className="letsConnectBtn"
                id="changeColorWhenClicked4"
                href="#letsConnect"
              >
                Let's Connect
              </a>
            </li>
          </ul>
          <div className="toolTip">
            <button className="hamburgerMenuBtn" onClick={hamburgerMenuButton}>
              <div className="bar"></div>
              <div className="bar"></div>
              <div className="bar"></div>
            </button>
          </div>
        </div>

        {hamburgerMenu && (
          <div className="hamburgerMenu.show">
            <div className="holdingHamburgerMenuLinks">
              <div>
                <a href="#aboutMe">About Me</a>
                <BsFilePerson />
              </div>

              <div>
                <a href={process.env.PUBLIC_URL + "/Resume.pdf"}>Resume</a>
                <CgFileDocument />
              </div>
              <div>
                <a href="#projects">Projects</a>
                <AiOutlineFundProjectionScreen />
              </div>
              <div>
                <a href="#letsConnect">Let's Connect</a>
                <GiVibratingSmartphone />
              </div>
            </div>
          </div>
        )}
      </nav>
    </>
  );
};

export default Nav;
