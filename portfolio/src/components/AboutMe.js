import "./AboutMe.css";

const AboutMe = () => {
  return (
    <>
      <div className="containEverything">
        <div className="containsTitleAndText">
          <div id="aboutMe" className="containsAboutMe">
            <p className="myaboutmeText">
              <div className="greetingContainer">
                <font className="greetingInAboutMe" size="+5">
                  {" "}
                  Hello{" "}
                </font>
              </div>
              <div className="aboutMeParagraph">
                I’m grateful you’re reviewing my portfolio! Thank you for taking
                the time. My name is Cassie and I’m a bubbly, optimistic and
                animated person. As an ambitious front-end engineer, I am
                thrilled to embrace this exciting opportunity in the field of
                engineering! My previous career was in healthcare, where I
                worked for seven years. While I had the benefit of helping
                others and looked forward to going to work daily, I desired to
                innovatively harness both my acute eye for detail and creative
                instincts in a distinct manner. I began playing around with
                programming and immediately knew I wanted to change my career
                path. I applied to the Software Engineer Immersive program at
                General Assembly, and voilà! I stepped out of my comfort zone
                and embarked on a new journey in web development.
                <br />
                <br />
                <div className="secondParagraph">
                  Today, I’m excited to bring my problem-solving, creative and
                  innovative thinking to the workforce.
                  <br />
                  Thank you for taking the time to review my portfolio.
                  <br />
                  I hope you enjoy it!
                  <br />
                </div>
              </div>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutMe;
