import "./Projects.css";
import { Slide } from "react-awesome-reveal";
import Video from "./Videos";
import { BsGithub } from "react-icons/bs";

const Projects = () => {
  return (
    <>
      <div className="containProjects">
        <div id="projects" className="containProjects"></div>
        <h5 className="myProjects">Projects</h5>
        <div className="line"></div>
        <div>
          <div className="allProjects">
            <div className="projectBorder1">
              <div className="cardInfo">
                <div className="projectTitle">Healthy Minds</div>
                <div className="technologiesUsed">
                  Python | React | React Router | HTML | CSS
                </div>
                <br />
                <Slide direction="left">
                  <div className="healthyMindsProjectDescription">
                    This mood tracking app gives you the ability to track your
                    mood and provides two credible forms, based on the National
                    Library of Medicine, to calculate a weekly score. The forms
                    are referred to as the Patient Health Care (PHQ-9) and
                    Generalized Anxiety Disorder (GAD-7) form. You can share
                    this information with your healthcare provider for better
                    treatment decisions. Hope you enjoy!
                    <br />
                    <br />
                    <div className="gitHubAndLiveSiteLink">
                      <div className="gitHubLink">
                        <div className="gitHubIcon">
                          <BsGithub />
                        </div>
                        <div>
                          <a
                            href="https://github.com/CasssieGithub/Healthy-Minds.git"
                            title="healthyMinds"
                          >
                            Github{" "}
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </Slide>
              </div>
              <div className="container">
                <div classname="videoDiv">
                  <Video src="https://i.imgur.com/v8qnIR2.mp4" />
                </div>
              </div>
            </div>
            <div className="projectBorder1">
              <p className="project-description"></p>

              <div className="cardInfo">
                <div className="projectTitle">Social Site</div>
                <div className="technologiesUsed">
                  Javascript | React | React Router | HTML | CSS
                </div>
                <br />
                <Slide direction="left">
                  <div className="socialSiteProjectDescription">
                    Social Media apps are built to allow people to connect and
                    communicate online. They provide a platform to allow people
                    to express their thoughts and feelings. That's why, you
                    guessed it we built one! Our social media app called, Social
                    Site allows users to create your own profile, post your
                    thoughts and have the ability to view others profiles to see
                    what they've posted!
                    <br />
                    <br />
                    <div className="gitHubAndLiveSiteLink">
                      <div className="gitHubLink">
                        <div className="gitHubIcon">
                          <BsGithub />
                        </div>
                        <div>
                          <a
                            href="https://github.com/CasssieGithub/Healthy-Minds.git"
                            title="healthyMinds"
                          >
                            Github{" "}
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </Slide>
              </div>

              <div className="container">
                <Video src="https://i.imgur.com/w0RFd4p.mp4" />
              </div>
            </div>
            <div className="projectBorder1">
              <p className="project-description"></p>

              <div className="container">
                <Video src="https://i.imgur.com/D1n1vQJ.mp4" />
              </div>

              <div className="cardInfo">
                <div className="projectTitle">Cardify</div>
                <div className="technologiesUsed">
                  Python | React | React Router | HTML | CSS
                </div>
                <br />
                <Slide direction="right">
                  <div className="cardifyProjectDescription">
                    Flashcards have been an effective study tool for a long
                    time. Thus, the creation of our app, Cardify. This site was
                    built to help people study using flashcards. This app was
                    built for users of all ages. In this app, you have the
                    ability to create, edit and delete your deck of cards. You
                    could also add and delete individual cards from your deck.
                    <br />
                    <br />
                    <div className="gitHubAndLiveSiteLink">
                      <div className="gitHubLink">
                        <div className="gitHubIcon">
                          <BsGithub />
                        </div>
                        <div>
                          <a
                            href="https://github.com/CasssieGithub/Healthy-Minds.git"
                            title="healthyMinds"
                          >
                            Github{" "}
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </Slide>
              </div>
            </div>

            <div className="projectBorder1">
              <p className="project-description"></p>
              <div className="container">
                <Video src="https://i.imgur.com/EPMlBk6.mp4" />
              </div>

              <div className="cardInfo">
                <div className="stopForgettingAndStartListingCardInfo">
                  <div className="projectTitle">
                    Stop Forgetting and Start Listing
                  </div>
                  <div className="technologiesUsed">
                    Javascript | HTML | CSS | Node.js | Express
                    <br /> MongoDB | EJS
                  </div>
                  <br />
                  <Slide direction="right">
                    <div className="stopForgettingAndStartListingProjectDescription">
                      Forgetful much? Well, you're in luck! Introducing the List
                      app. This application gives you the ability to create,
                      edit and delete a category (ex. Grocery list, school
                      supply list). In addition, access your list of items which
                      you could also create, edit or delete. Hope you enjoy!
                      <br />
                      <br />
                      <div className="gitHubAndLiveSiteLink">
                        <div className="gitHubLink">
                          <div className="gitHubIcon">
                            <BsGithub />
                          </div>
                          <div>
                            <a
                              href="https://github.com/CasssieGithub/Healthy-Minds.git"
                              title="healthyMinds"
                            >
                              Github{" "}
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Slide>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Projects;
