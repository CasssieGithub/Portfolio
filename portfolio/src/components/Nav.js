import "./Nav.css";
// I only used the ID's
// id="changeColorWhenClicked1"
// id="changeColorWhenClicked2"
// id="changeColorWhenClicked3"
// id="changeColorWhenClicked4"
// FOR JQUERY!

const Nav = (props) => {
  return (
    <>
      <nav>
        <div className="navName">Cassie Hernandez</div>
        <ul className="allNavLinks">
          <li className="navItems">
            <a id="changeColorWhenClicked1" href="#homeButton">
              Home
            </a>
          </li>
          <li className="navItems">
            <a id="changeColorWhenClicked2" href="#aboutMe">
              About Me
            </a>
          </li>
          <li className="navItems">
            <a href="./Resume.pdf" target="_blank">
              Resume
            </a>
          </li>
          <li className="navItems">
            <a id="changeColorWhenClicked3" href="#projects">
              Projects
            </a>
          </li>
          <li className="navItems">
            <a id="changeColorWhenClicked4" href="#letsConnect">
              Let's Connect
            </a>
          </li>
        </ul>
        <div className="toolTip">
          <button className="changeToDarkMode">
            <i className="bi bi-brightness-high"></i>
            <i className="bi bi-moon-fill"></i>
          </button>
          <span className="toolTipText">Change Mode</span>
          <button onClick={props.toggleTheme}>Toggle Theme</button>
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
