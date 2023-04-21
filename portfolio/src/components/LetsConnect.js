import "./LetsConnect.css";

const LetsConnect = () => {
  return (
    <>
      <div id="letsConnect" className="containConnections">
        <h5 className="myConnections">Let's Connect</h5>
        <div className="line"></div>

        <div className="icons">
          <div id="mail">
            <i className="bi bi-envelope-at-fill"></i>
            <div>
              <a
                className="linkFontColorsDarkTheme"
                href="mailto: casssie.hernandez13@gmail.com"
              >
                Email me!
              </a>
            </div>
          </div>
          <div id="gitHub">
            <i className="bi bi-github"></i>
            <div>
              <a
                className="linkFontColorsDarkTheme"
                href="https://github.com/CasssieGithub"
              >
                GitHub
              </a>
            </div>
          </div>

          <div id="linkedIn">
            <i className="bi bi-linkedin"></i>
            <div>
              <a
                className="linkFontColorsDarkTheme"
                href="https://www.linkedin.com/in/cassandra-hernandez-software-engineer/"
              >
                Linked in
              </a>
            </div>
          </div>
          <div id="resume">
            <i className="bi bi-file-earmark-pdf-fill"></i>
            <a className="linkFontColorsDarkTheme" href="./Resume.pdf">
              {" "}
              Resume
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default LetsConnect;
