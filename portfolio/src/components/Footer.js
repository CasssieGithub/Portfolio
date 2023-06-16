import "./Footer.css";

const Footer = () => {
  return (
    <>
      <div className="theFooterContainer">
        {/* <div className="">Thanks for reviewing my portfolio.</div> */}

        <div className="technologiesAndImageInFooter">
          <div className="footerTitleContainer">
            <div className="footerTitle">Thanks for review my portfolio.</div>
            <div className="portfolioDescriptionInFooter">
              My portfolio serves as a testament to my skills and commitment to
              delivering high-quality projects using these technologies. I am
              excited to continue leveraging my knowledge and expanding my
              portfolio by tackling new challenges and exploring emerging
              technologies! Thanks for reviewing it this far. I really hope to
              hear from you soon!
            </div>
          </div>

          <div className="technologiesUsedContainer">
            <div>
              <div className="technologiesUsedTitle">
                How'd I build my portfolio?
              </div>
              <div className="technologiesList">
                <div>JavaScript</div>
                <div>React</div>
                <div>HTML</div>
                <div>CSS</div>
              </div>
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
        <div className="flowerPictureOnFooterContainer">
          <img
            className="flowerPictureOnFooter"
            src="https://i.imgur.com/46KiiUg.png"
            alt="flower"
          />
        </div>
        <div className="copyright">Copyright © 2023 Cassandra Hernandez</div>
      </div>
    </>
  );
};
export default Footer;
