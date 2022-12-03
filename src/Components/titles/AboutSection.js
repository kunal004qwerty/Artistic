import "./AboutSection.scss";
import neon04 from "../../Assets/Images/neon04.png";

import React from "react";
import ParagraphText from "../ParagraphText/ParagraphText";
import SectionTitle from "./SectionTitle";
import PrimaryButton from "../buttons/PrimaryButton";

const AboutSection = () => {
  return (
    <div id="about">
      <div className="container">
        <div className="about__wrapper">
          <div className="about__img">
            <img src={neon04} alt=""></img>
          </div>
          <div className="about__info">
            <ParagraphText className="about__subtitle">
              Who are We
            </ParagraphText>
            <SectionTitle className="about__title">
              Capturing life as it happens
            </SectionTitle>
            <ParagraphText className="about__desc">
              “Artistic” is a studio of some passionate photographer. Our Goal
              is to capture your experience.
            </ParagraphText>
            <PrimaryButton buttonType="a" href="#contact">
              Get In Touch
            </PrimaryButton>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
