import "./Projects.css";
import Fade from "react-reveal/Fade";

const Projects = () => {
  return (
    <>
      <div className="containProjects">
        <div id="projects" className="containProjects"></div>
        <h5 className="myProjects">Projects</h5>
        <div className="line"></div>
        <Fade bottom>
          <div className="allProjects">
            <div className="projectBorder1">
              <p className="project-description"></p>
              <div>
                <img
                  className="ticTacToe"
                  src="https://i.imgur.com/Bfhm8ew.jpg"
                  width="250px"
                  alt="Tic Tac Toe"
                />
                <img
                  className="ticTacToeTwo"
                  src="https://i.imgur.com/RyRrsNt.jpg"
                  alt="Tic Tac Toe Second"
                />
              </div>
              <a
                className="projectButton1"
                href="insertlinkforgamehere"
                title="ticTacToe"
              >
                Tic-Tac-Toe
              </a>
            </div>

            <div className="projectBorder1">
              <p className="project-description"></p>
              <div>
                <img
                  className="Snake"
                  src="https://i.imgur.com/TFJ0fM6.jpg"
                  width="250px"
                  alt="Snake"
                />
                <img
                  className="snakeTwo"
                  src="https://i.imgur.com/G8kQkyY.jpg"
                  alt="Snake Two"
                />
              </div>
              <a
                className="projectButton2"
                href="insertlinkforgamehere"
                title="snake"
              >
                Snake
              </a>
            </div>
            <div className="projectBorder1">
              <p className="project-description"></p>
              <div>
                <img
                  className="rockPaperScissors"
                  src="https://i.imgur.com/y7mWhnH.jpg"
                  width="250px"
                  alt="Rock, Paper, Scissors"
                />
              </div>
              <img
                className="rockPaperScissorsTwo"
                src="https://i.imgur.com/ohGK140.jpg"
                alt="Rock, Paper, Scissorrs, Two"
              />
              <a
                className="projectButton3"
                href="insertlinkforgamehere"
                title="rockPaperScissors"
              >
                Rock, Paper, Scissors
              </a>
            </div>

            <div className="projectBorder1">
              <p className="project-description"></p>
              <div>
                <img
                  className="wordSearch"
                  src="https://i.imgur.com/dYiSF74.jpg"
                  width="250px"
                  alt="Word Search"
                />
                <img
                  className="wordSearchTwo"
                  src="https://i.imgur.com/2vvqzOk.jpg"
                  alt="Word Search Two"
                />
              </div>

              <a
                className="projectButton4"
                href="insertlinkforgamehere"
                title="wordSearch"
              >
                Word Search
              </a>
            </div>
          </div>
        </Fade>
      </div>
    </>
  );
};

export default Projects;
