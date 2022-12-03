import "../Styles/HeroSection.scss";
import React from "react";
import HeroTitle from "./titles/HeroTitle";
import ParagraphText from "./ParagraphText/ParagraphText";
import PrimaryButton from "./buttons/PrimaryButton";
import JapanNeon01 from "../Assets/Images/JapanNeon01.png";
// import Neon01 from "../Assets/Images/neon04.png";

const HeroSection = () => {
  return (
    <div id="home">
      <div className="Hero__Container">
        <div className="Hero__Wrapper">
          <div className="hero__info">
            <HeroTitle className="hero__title">
              A Click Of Artistic Joy
            </HeroTitle>
            <ParagraphText className="hero__description">
              Because every picture tells a story, let us help you tell yours.
            </ParagraphText>
            <PrimaryButton buttonType="a" href="#contact">
              Get In Touch
            </PrimaryButton>
          </div>
          <div className="hero__img">
            <img src={JapanNeon01} alt=""></img>
            {/* <img src={Neon01} alt=""></img> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
