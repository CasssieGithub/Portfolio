import "./AboutMe.css";

const AboutMe = () => {
  return (
    <>
      <div className="containEverything">
        <div className="containsTitleAndText">
          <div id="aboutMe" className="containsAboutMe">
            <h5 className="myAboutMe"></h5>

            <p className="myaboutmeText">
              <div className="greetingContainer">
                <font className="greetingInAboutMe" size="+5">
                  {" "}
                  Hello{" "}
                </font>
              </div>
              <div className="aboutMeParagraph">
                my name is Cassie and I'm a front-end engineer. My previous
                career was in healthcare, where I worked for seven years. While
                I had the the benefit of helping others and looked forward to
                going to work every day, I felt like there was something
                missing. That’s when I started exploring web development, and I
                quickly became intrigued by it. I began playing around with
                programming and knew right away that I wanted to switch to a
                career in this field. After a month of exploring my options, I
                applied to the Software Engineer Immersive program at General
                Assembly, and it was the best decision I’ve made. I stepped out
                of my comfort zone and embarked on a new journey in web
                development.
                <br />
                <br />
                <div className="secondParagraph">
                  Today, I’m excited to bring my problem-solving skills and
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
