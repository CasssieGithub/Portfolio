import "./Home.css";

const Home = () => {
  return (
    <>
      <div id="containerToWrapForFlexBox">
        <div className="fadeInTextAndPictureIntro">
          <div className="backgroundImg" id="homeButton">
            <div className="fade-in-text">
              <p className="first">Hi, I'm Cassie!</p>
              <div className="second"> Full Stack Engineer,</div>
              <div className="introPhrase">
                with an innovative mind and a keen eye for design.{" "}
              </div>
            </div>

            <div className="pictureOnIntro">
              <>
                <div className="girlsWhoCodeContainer">
                  <img
                    className="girlsWhoCode"
                    src="https://i.imgur.com/6Mlf4xi.png"
                    alt="Girls Who Code"
                  />
                </div>
              </>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
