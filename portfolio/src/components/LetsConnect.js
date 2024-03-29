import "./LetsConnect.css";

const LetsConnect = () => {
  return (
    <>
      <div id="letsConnect" className="containConnections">
        <h5 className="myConnections">Connect with me</h5>
        <h3 className="easyAsOneTwoThree">It's as easy as 1, 2 or 3</h3>
        <div className="line"></div>

        <div className="icons">
          <div id="mail">
            <div className="numberOnFooter">1</div>
            <div>
              <a
                className="emailBtnToConnect"
                href="mailto: casssie.hernandez13@gmail.com"
              >
                Email
              </a>
            </div>
          </div>
          <div id="resume">
            <div className="numberOnFooter">2</div>
            <div>
              <a href={process.env.PUBLIC_URL + "/UpdatedResume.pdf"}>Resume</a>
            </div>
          </div>

          <div id="linkedIn">
            <div className="numberOnFooter">3</div>
            <div>
              <a
                className="linkedInBtnToConnect"
                href="https://www.linkedin.com/in/cassandra-hernandez-software-engineer/"
              >
                Linked in
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LetsConnect;
