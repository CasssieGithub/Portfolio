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
                Thank you for considering my portfolio! I genuinely appreciate
                the time you've taken. My name is Cassie, and I'm an
                enthusiastic, optimistic, and animated individual. As a highly
                motivated front-end engineer, I'm thrilled to embrace this
                exciting opportunity in the engineering field. Drawing upon my
                seven years of experience in the healthcare industry, I've
                developed invaluable skills in problem-solving and innovative
                thinking that I'm eager to apply in the engineering field. While
                working in healthcare, I discovered fulfillment in creatively
                addressing challenges and cultivated a strong attention to
                detail. However, I desired to channel my creative instincts in a
                fresh and innovative way, leading me to explore programming.
                Upon diving into this new realm, I realized that changing my
                career path was the right choice. I took a leap of faith and
                enrolled in the Software Engineer Immersive program at General
                Assembly, and voilà! I stepped out of my comfort zone and
                embarked on an exhilarating new journey in web development.
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
