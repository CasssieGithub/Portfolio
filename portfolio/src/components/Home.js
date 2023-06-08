import "./Home.css";

const Home = (props) => {
  return (
    <>
      <div id="containerToWrapForFlexBox">
        <div className="fadeInTextAndPictureIntro">
          <div className="backgroundImg" id="homeButton">
            <div className="fade-in-text">
              <p className="first">Hi, I'm Cassie</p>
              <div className="second"> Frontend Engineer</div>
              <div className="introPhrase">
                with an innovative mind and a keen eye for design.{" "}
              </div>
            </div>

            <div className="pictureOnIntro">
              {props.theme === "light" ? (
                <>
                  <div className="girlsWhoCodeContainer">
                    <img
                      className="girlsWhoCode"
                      src="https://i.imgur.com/o79wqgS.png"
                      width="100%"
                      height="500px;"
                      alt="Girls Who Code"
                    />
                  </div>
                  {/* https://i.imgur.com/Q1lJyrT.jpg */}
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
