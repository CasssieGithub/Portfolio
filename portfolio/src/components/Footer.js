import "./Footer.css";

const Footer = () => {
  return (
    <>
      <div className="theFooterContainer">
        {/* <div className="">Thanks for reviewing my portfolio.</div> */}

        <div className="technologiesAndImageInFooter">
          <div className="footerTitle">
            Thanks for review my portfolio.
            <div className="portfolioDescriptionInFooter">
              By incorporating React, React Router, and JavaScript into my
              portfolio, I have showcased my expertise in these technologies and
              demonstrated my ability to create engaging and responsive web
              applications. My portfolio serves as a testament to my skills and
              commitment to delivering high-quality projects using these
              technologies. I am excited to continue leveraging my knowledge and
              expanding my portfolio by tackling new challenges and exploring
              emerging technologies within the React ecosystem.
            </div>
          </div>

          <div className="technologiesUsedContainer">
            <div>
              <div className="technologiesUsedTitle">
                How did I build my portfolio?
              </div>
              <div>JavaScript</div>
              <div>React</div>
              <div>HTML</div>
              <div>CSS</div>
            </div>
          </div>
          <div className="wrappingTheImageTagInFooter">
            <img
              className="imageInFooter"
              src="https://i.imgur.com/BSbnVHN.png"
              alt="Footer"
            />
          </div>
        </div>
      </div>
    </>
  );
};
export default Footer;
