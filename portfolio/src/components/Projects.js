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
              <div className="container">
                <img
                  className="healthyMinds containsImages"
                  src="https://i.imgur.com/Bfhm8ew.jpg"
                  width="200px"
                  height="200px"
                  alt="Healthy Minds"
                />
                <img
                  className="healthyMindsTwo"
                  src="https://i.imgur.com/RyRrsNt.jpg"
                  alt="Tic Tac Toe Second"
                />
              </div>
              <a
                className="projectButton1"
                href="insertlinkforgamehere"
                title="healthyMinds"
              ></a>
              <div className="cardInfo">
                <div className="projectTitle">Healthy Minds</div>
                <br />
                Python | React | React Router | HTML | CSS
                <br />
                <br />
                <div className="healthyMindsProjectDescription">
                  This mood tracking app sends daily notifications to track your
                  mood and provides a credible form, based on the National
                  Library of Medicine, to calculate a weekly score. You can
                  share this information with your healthcare provider for
                  better treatment decisions.
                </div>
              </div>
            </div>

            <div className="projectBorder1">
              <p className="project-description"></p>
              <div className="container">
                <img
                  className="socialSite containsImages"
                  src="https://i.imgur.com/FNmAoYS.png"
                  width="200px"
                  height="200px"
                  alt="Social Site"
                />
                {/* <img
                  className="socialSiteTwo"
                  src="https://i.imgur.com/G8kQkyY.jpg"
                  alt="Social Site Two"
                /> */}
              </div>
              <a
                className="projectButton2"
                href="https://github.com/CasssieGithub/Social-Site-Frontend"
                title="socialSite"
              ></a>
              <div className="cardInfo">
                <div className="projectTitle">Social Site</div>
                <br />
                Javascript | React | React Router | HTML | CSS
                <br />
                <br />
                <div className="socialSiteProjectDescription">
                  Social Media apps are built to allow people to connect and
                  communicate online. They provide a platform to allow people to
                  express their thoughts and feelings. That's why, you guessed
                  it we built one! Our social media app called, Social Site
                  allows users to create your own profile, post your thoughts
                  and have the ability to view others profiles to see what
                  they've posted!
                </div>
              </div>
            </div>
            <div className="projectBorder1">
              <p className="project-description"></p>
              <div className="container">
                <img
                  className="cardify containsImages"
                  src="https://i.imgur.com/Ja4L127.png"
                  width="200px"
                  height="200px"
                  alt="Cardify"
                />
              </div>
              {/* <img
                className="cardifyTwo"
                src="https://i.imgur.com/ohGK140.jpg"
                alt="Cardify Two"
              /> */}
              <a
                className="projectButton3"
                href="https://github.com/CasssieGithub/Cardify-Frontend"
                title="Cardify"
              ></a>
              <div className="cardInfo">
                <div className="projectTitle">Cardify</div>
                <br />
                Python | React | React Router | HTML | CSS
                <br />
                <br />
                <div className="cardifyProjectDescription">
                  Flashcards have been an effective study tool for a long time.
                  Thus, the creation of our app, Cardify. This site was built to
                  help people study using flashcards. This app was built for
                  users of all ages. In this app, you have the ability to
                  create, edit and delete your deck of cards. You could also add
                  and delete individual cards from your deck.
                </div>
              </div>
            </div>

            <div className="projectBorder1">
              <p className="project-description"></p>
              <div className="container">
                <img
                  className="stopForgettingStartListing containsImages"
                  src="https://i.imgur.com/iWWCqp3.png"
                  width="200px"
                  height="200px"
                  alt="Stop Forgetting Start Listing"
                />
                {/* <img
                  className="stopForgettingStartListingTwo"
                  src="https://i.imgur.com/2vvqzOk.jpg"
                  alt="stopForgettingStartListing Two"
                /> */}
              </div>
              <a
                className="projectButton4"
                href="https://github.com/CasssieGithub/Stop-Forgetting-Start-Listing"
                title="stopForgettingStartListing"
              ></a>
              <div className="cardInfo">
                <div className="projectTitle">
                  Stop Forgetting and Start Listing
                </div>
                <br />
                Javascript | HTML | CSS | Node.js | Express
                <br /> MongoDB | EJS
                <br />
                <br />
                <div className="stopForgettingAndStartListingProjectDescription">
                  Forgetful much? Well, you're in luck! Introducing the List
                  app. This application gives you the ability to create, edit
                  and delete a category (ex. Grocery list, school supply list).
                  In addition, access your list of items which you could also
                  create, edit or delete. Hope you enjoy!
                </div>
              </div>
            </div>
          </div>
        </Fade>
      </div>
    </>
  );
};

export default Projects;
