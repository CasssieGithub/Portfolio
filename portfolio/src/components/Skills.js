import "./Skills.css";

const Skills = () => {
  return (
    <>
      <div className="skillsSectionContainer">
        <div className="backgroundImageOnSkillsSection">
          <div className="skillsSectionTitle">Skills</div>
          <div className="skillsSectionCategoryContainer">
            <div className="languageSection">
              <div className="languagesTitle">Languages</div>
              <div>JavaScript</div>
              <div>Node.js</div>
              <div>HTML</div>
              <div>CSS</div>
              <div>Python</div>
              <div>SQL</div>
              <div>JSON</div>
              <div>Typescript</div>
              <div>EJS</div>
            </div>
            <div className="databaseSection">
              <div className="databasesTitle">Databases</div>
              <div>PostgreSQL</div>
              <div>MongoDB</div>
            </div>
            <div className="librariesAndFrameworksSection">
              <div className="librariesAndFrameworksTitle">
                Libraries and Frameworks
              </div>
              <div>React</div>
              <div>Express.js</div>
              <div>Mongoose</div>
              <div>Django</div>
              <div>Jquery</div>
              <div>Bootstrap</div>
            </div>
            <div className="otherSection">
              <div className="otherTitle">Other</div>
              <div>RESTful Routing</div>
              <div>JSON api</div>
              <div>CRUD</div>
              <div>Git</div>
              <div>GitHub</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Skills;
