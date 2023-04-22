import "./Home.css";

const Home = () => {
  return (
    <>
      <div id="containerToWrapForFlexBox">
        <div className="backgroundImg" id="homeButton">
          <div className="fade-in-text">
            <p className="first">Hi, I'm Cassie!</p>
            <p className="second">
              <i>Software Engineer</i>
            </p>
          </div>
        </div>
        <div className="fade-in-image">
          {/* <img
            className="imgBorder"
            src="https://i.imgur.com/qodNEsn.jpg"
            width="400px"
            alt="Fade-in"
          /> */}
        </div>
      </div>
    </>
  );
};

export default Home;
