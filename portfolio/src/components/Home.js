import "./Home.css";

const Home = (props) => {
  return (
    <>
      <div id="containerToWrapForFlexBox">
        <div className="fadeInTextAndPictureIntro">
          <div className="backgroundImg" id="homeButton">
            <div className="fade-in-text">
              <p className="first">Hi, I'm Cassie</p>

              <div className="introPhrase">
                <b>Frontend Engineer</b> with an innovative mind and a keen eye
                for design.{" "}
              </div>
            </div>

            <div className="pictureOnIntro">
              {props.theme === "light" ? (
                <>
                  <img
                    className="girlsWhoCode"
                    src="https://i.imgur.com/djmuq6R.jpg"
                    width="100%"
                    height="500px;"
                    alt="Girls Who Code"
                  />
                  {/* https://i.imgur.com/Q1lJyrT.jpg */}
                  <div class="arrow arrow-first"></div>
                  <div class="arrow arrow-second"></div>
                </>
              ) : (
                <>
                  <img
                    className="girlsWhoCode"
                    src="https://i.imgur.com/lD56EwJ.jpg"
                    width="100%"
                    height="400px;"
                    alt="girlsWhoCodeDarkMode"
                  />
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
