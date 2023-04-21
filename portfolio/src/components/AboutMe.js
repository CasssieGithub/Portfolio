import "./AboutMe.css";

const AboutMe = () => {
  return (
    <>
      <div className="containEverything">
        <div id="aboutMe" className="containAboutMe">
          <h5 className="myAboutMe">About Me</h5>
          <div className="line"></div>
          <p className="myaboutmeText">
            Hello! My name is Cassie and I’m a Software Engineer. Prior to
            becoming a software engineer, I worked in Healthcare for 7 years. I
            enjoyed going to work everyday and was passionate about helping
            others however; I felt like something was missing. I started doing
            some research and was intrigued with software engineering. I began
            to play around with programming and immediately knew I wanted to
            change career paths. I applied to the Software Engineer Immersive
            program at General Assembly and voilà! I got out of my comfort zone
            and began my journey towards a new career in web development. I look
            forward to applying -hopefully with you- creative problem-solving
            and continuous innovation in the workforce.
            <br />
            Thanks for taking the time to review my portfolio.
            <br />
            I hope you enjoy it!
            <br />
          </p>
        </div>
      </div>
    </>
  );
};

export default AboutMe;
