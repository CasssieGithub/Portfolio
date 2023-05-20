import "./Nav.css";

const Nav = (props) => {
  return (
    <>
      <nav>
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
          {/* I will finish this later. */}
          {/* <div onClick={props.toggleTheme}>
            Dark Mode
            <i className="bi bi-moon-fill"> </i>
          </div> */}
          <span className="toolTipText">Change Mode</span>
        </div>
        <div className="hamburger">
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>
      </nav>
    </>
  );
};

export default Nav;
